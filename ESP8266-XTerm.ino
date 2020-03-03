#include <FS.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <ESP8266HTTPUpdateServer.h>
#include <WebSocketsServer.h>

ESP8266WebServer server(80);
ESP8266HTTPUpdateServer updater;
WebSocketsServer webSocket(5999);

int ACCESS_POINT_MODE = 0;
char ACCESS_POINT_SSID[] = "XTerm";
char ACCESS_POINT_PASSWORD[] = "terminal123";
int ACCESS_POINT_CHANNEL = 1;
int ACCESS_POINT_HIDE = 0;

const char text_html[] = "text/html";
const char text_plain[] = "text/plain";

char tty[64];

void setup()
{
  Serial.begin(115200, SERIAL_8N1);

  uint8_t timeout = 10;
  while (!Serial && timeout > 0) {
    Serial.swap(); //Swapped UART pins
    delay(500);
    timeout--;
  }

  //===========
  //File system
  //===========
  SPIFFS.begin();

  if (ACCESS_POINT_MODE == 0) {
    //=====================
    //WiFi Access Point Mode
    //=====================
    WiFi.setPhyMode(WIFI_PHY_MODE_11B); // WIFI_PHY_MODE_11G / WIFI_PHY_MODE_11N
    WiFi.mode(WIFI_AP);
    IPAddress ip(192, 168, 4, 1);
    IPAddress gateway(192, 168, 4, 1);
    IPAddress subnet(255, 255, 255, 0);
    WiFi.softAPConfig(ip, gateway, subnet);
    WiFi.softAP(ACCESS_POINT_SSID, ACCESS_POINT_PASSWORD, ACCESS_POINT_CHANNEL, ACCESS_POINT_HIDE);
    //Serial.println(WiFi.softAPIP());
  } else {
    //================
    //WiFi Client Mode
    //================
    WiFi.mode(WIFI_STA);
    WiFi.persistent(false);
    WiFi.disconnect(true);
    WiFi.begin(ACCESS_POINT_SSID, ACCESS_POINT_PASSWORD);  //Connect to the WiFi network
    //WiFi.enableAP(0);
    while (WiFi.waitForConnectResult() != WL_CONNECTED) {
      //Serial.println("Connection Failed! Rebooting...");
      delay(5000);
      ESP.restart();
    }
    //Serial.println(WiFi.localIP());
  }

  //===============
  //Web OTA Updater
  //===============
  updater.setup(&server);

  //===============
  //Web Server
  //===============
  server.on("/format", HTTP_GET, []() {
    String result = SPIFFS.format() ? "OK" : "Error";
    FSInfo fs_info;
    SPIFFS.info(fs_info);
    server.send(200, text_plain, "<b>Format " + result + "</b><br/>Total Flash Size: " + String(ESP.getFlashChipSize()) + "<br>SPIFFS Size: " + String(fs_info.totalBytes) + "<br>SPIFFS Used: " + String(fs_info.usedBytes));
  });
  server.on("/reset", HTTP_GET, []() {
    server.send(200, text_plain, "...");
    delay(500);
    ESP.restart();
  });
  server.on("/", []() {
    if (SPIFFS.exists("/index.html")) {
      server.sendHeader("Location", "/index.html");
      server.send(303);
    } else {
      server.sendHeader("Refresh", "6; url=/update");
      server.send(200, text_html, "File System Not Found ...Upload SPIFFS");
    }
  });
  server.onNotFound([]() {
    if (!HTTPServer(server.uri()))
      server.send(404, text_plain, "404: Not Found");
  });
  server.begin();

  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
}

void loop()
{
  webSocket.loop();
  server.handleClient();
}

bool HTTPServer(String file)
{
  if (SPIFFS.exists(file))
  {
    File f = SPIFFS.open(file, "r");
    if (f)
    {
      String contentType = getContentType(file);
      server.sendHeader("Content-Encoding", "gzip");
      server.streamFile(f, contentType);

      f.close();

      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

String getContentType(String filename)
{
  if (filename.endsWith(".html")) return "text/html";
  else if (filename.endsWith(".css")) return "text/css";
  else if (filename.endsWith(".js")) return "application/javascript";
  return text_plain;
}

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length)
{
  switch (type) {
    case WStype_DISCONNECTED:
      //Serial.printf("[%u] Disconnected!\n", num);
      break;
    case WStype_CONNECTED: {
        //IPAddress ip = webSocket.remoteIP(num);
        //Serial.println(ip.toString());

        sendTXT(num, "2{ }");
        sendTXT(num, "0\033[32;1;1mConnected\033[0;0;0m\r\n");
        sendTXT(num, "0------------------------------------------------\r\n");
        sendTXT(num, "0Firmware updates visit http://192.168.4.1/update\r\n");
        sendTXT(num, "0------------------------------------------------\r\n");

        if (Serial.available()) {
          //String output = "0" + Serial.readString();
          //sendTXT(num, output);

          char b[255];
          size_t len = 0;
          do {
            memset(b, 0, sizeof(b));
            len = Serial.readBytes(b, sizeof(b) - 1);
            char c[256] = "0"; strcat(c, b);
            webSocket.sendBIN(num, (uint8_t *)c, len + 1);
          } while (len > 0);
        }
      }
      break;
    case WStype_TEXT:
      //Serial.printf("[%u] get Text: %s\n", num, payload);
      //webSocket.sendTXT(num, payload, length);
      //webSocket.broadcastTXT(payload, length);
      break;
    case WStype_BIN:
      //USE_SERIAL.printf("[%u] get binary length: %u\n", num, length);

      if (payload[0] == '1' ) {
        sendTXT(num, "1ESP8266 XTerm");

      } else if (payload[0] == '0') {

        if (payload[1] != '\r') {
          webSocket.sendBIN(num, payload, length);

          //DEBUG
          /*
            char str[256];
            snprintf(str, sizeof str, "0%zx", length);
            sendTXT(num, str);
          */
          
          uint8_t *p = &payload[1]; //skip first character
          strcat(tty, (char*)p);

        } else {

          sendTXT(num, "0\r\n");
          
          //DEBUG
          /*
            char str[256];
            snprintf(str, sizeof str, "0%s", tty);
            sendTXT(num, str);
            Serial.print("get udc\n");
          */
          
          Serial.printf("%s\n", tty);

          uint8_t timeout = 10;
          while (!Serial.available() && timeout > 0) {
            delay(1);
            timeout--;
          }

          memset(tty, 0, sizeof(tty));

          if (Serial.available()) {
            //String output = "0" + Serial.readString();
            //sendTXT(num, output);
            
            char b[511];
            size_t len = 0;
            do {
              memset(b, 0, sizeof(b));
              len = Serial.readBytes(b, sizeof(b) - 1);
              char c[512] = "0"; strcat(c, b);
              webSocket.sendBIN(num, (uint8_t *)c, len + 1);
            } while (len > 0);
          }
        }
      }
      break;
      /*
        case WStype_BIN:
        case WStype_ERROR:
        case WStype_FRAGMENT_TEXT_START:
        case WStype_FRAGMENT_BIN_START:
        case WStype_FRAGMENT:
        case WStype_FRAGMENT_FIN:
        default:
        break;
      */
  }
}

void sendTXT(uint8_t num, String data)
{
  const char *payload = data.c_str();
  webSocket.sendBIN(num, (uint8_t *)payload, data.length());
}
