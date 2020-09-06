#include <LittleFS.h>
#include <ESP8266WiFi.h>
#include <DNSServer.h>
#include <ESP8266WebServer.h>
#include <ESP8266HTTPUpdateServer.h>
#include <WebSocketsServer.h>

DNSServer dnsServer;
ESP8266WebServer server(80);
ESP8266HTTPUpdateServer updater;
WebSocketsServer webSocket(5999);

uint8_t ACCESS_POINT_MODE = 0;
char ACCESS_POINT_SSID[] = "XTerm";
char ACCESS_POINT_PASSWORD[] = "";
uint8_t ACCESS_POINT_CHANNEL = 1;
uint8_t ACCESS_POINT_HIDE = 0;
uint8_t NETWORK_DHCP = 0;
char NETWORK_IP[] = "192.168.4.1";
char NETWORK_SUBNET[] = "255.255.255.0";
char NETWORK_GATEWAY[] = "192.168.4.1";
char NETWORK_DNS[] = "192.168.4.1";

const char text_html[] = "text/html";
const char text_plain[] = "text/plain";

#define CRLF true

// *** Lebowski Inverter ***
//===============================
#define RESETPIN 2 //(D4 NodeMCU "also LED")
//#define SETUPPIN 0 //(D3 NodeMCU)
#define SETUPPIN 4 //(D2 NodeMCU)
//===============================

uint8_t ttyFirmware = 0;

void setup()
{
  Serial.begin(115200, SERIAL_8N1);

#if RESETPIN
  pinMode(RESETPIN, OUTPUT);
  digitalWrite(RESETPIN, LOW);
#endif

#if SETUPPIN
  pinMode(SETUPPIN, OUTPUT);
  digitalWrite(SETUPPIN, LOW);
#endif

  LittleFS.begin();

  WiFi.setPhyMode(WIFI_PHY_MODE_11B); // WIFI_PHY_MODE_11G / WIFI_PHY_MODE_11N
  WiFi.setSleepMode(WIFI_NONE_SLEEP);

  IPAddress ip, gateway, subnet, dns;
  ip.fromString(NETWORK_IP);
  subnet.fromString(NETWORK_SUBNET);
  gateway.fromString(NETWORK_GATEWAY);
  dns.fromString(NETWORK_DNS);

  if (ACCESS_POINT_MODE == 0) {
    //=====================
    //WiFi Access Point Mode
    //=====================

    WiFi.mode(WIFI_AP);
    WiFi.softAPConfig(ip, gateway, subnet);
    WiFi.softAP(ACCESS_POINT_SSID, ACCESS_POINT_PASSWORD, ACCESS_POINT_CHANNEL, ACCESS_POINT_HIDE);
    //Serial.println(WiFi.softAPIP());

    //==========
    //DNS Server
    //==========
    dnsServer.setErrorReplyCode(DNSReplyCode::NoError);
    dnsServer.start(53, "*", WiFi.softAPIP());
  } else {
    //================
    //WiFi Client Mode
    //================
    WiFi.mode(WIFI_STA);
    if (NETWORK_DHCP == 0) {
      WiFi.config(ip, dns, gateway, subnet);
    }
    WiFi.begin(ACCESS_POINT_SSID, ACCESS_POINT_PASSWORD);  //Connect to the WiFi network

    WiFi.setAutoConnect(true);
    WiFi.setAutoReconnect(true);
    //WiFi.enableAP(0);
    while (WiFi.waitForConnectResult() != WL_CONNECTED) {
      //Serial.println("Connection Failed! Rebooting...");
      delay(10000);
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
  server.on("/hotspot-detect.html", HTTP_GET, []() {
    if (SPIFFS.exists("/index.html")) {
        HTTPServer("/index.html");
      } else {
        server.sendHeader("Location", "/update");
        server.send(303);
      }
   });
  server.on("/format", HTTP_GET, []() {
    String result = LittleFS.format() ? "OK" : "Error";
    FSInfo fs_info;
    LittleFS.info(fs_info);
    server.send(200, text_plain, "<b>Format " + result + "</b><br/>Total Flash Size: " + String(ESP.getFlashChipSize()) + "<br>LittleFS Size: " + String(fs_info.totalBytes) + "<br>LittleFS Used: " + String(fs_info.usedBytes));
  });
  server.on("/reset", HTTP_GET, []() {
    server.send(200, text_plain, "...");
    delay(500);
    ESP.restart();
  });
  server.on("/token", HTTP_GET, []() {
    server.send(200, "application/json", "{\"token\": \"" + String(WiFi.macAddress()) + "\"}");
  });
  server.on("/", []() {
    if (LittleFS.exists("/index.html")) {
      server.sendHeader("Location", "/index.html");
      server.send(303);
    } else {
      server.sendHeader("Refresh", "6; url=/update");
      server.send(200, text_html, "File System Not Found ...");
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
  server.handleClient();
  dnsServer.processNextRequest();
  webSocket.loop();
  yield();
}

bool HTTPServer(String file)
{
  if (LittleFS.exists(file))
  {
    File f = LittleFS.open(file, "r");
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
  else if (filename.endsWith(".ico")) return "image/x-icon";
  else if (filename.endsWith(".js")) return "application/javascript";
  return text_plain;
}

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length)
{
  switch (type) {
    case WStype_DISCONNECTED:
      //Serial.printf("[%u] Disconnected!\n", num);

#if RESETPIN
      // *** Lebowski Inverter ***
      //================================
      digitalWrite(RESETPIN, HIGH); //ON
      delay(100);
      digitalWrite(RESETPIN, LOW); //OFF
      //================================
#endif
      break;
    case WStype_CONNECTED: {
        //IPAddress ip = webSocket.remoteIP(num);
        //Serial.println(ip.toString());

        sendTXT(num, "2{ }");
        sendTXT(num, "0\033[32;1;1mConnected\033[0;0;0m\r\n");
        sendTXT(num, "0---------------------------------------------------\r\n");
        sendTXT(num, "0ESP8266 Firmware Updates: http://" +  String(WiFi.softAPIP()[0]) + "." + String(WiFi.softAPIP()[1]) + "." + String(WiFi.softAPIP()[2]) + "." + String(WiFi.softAPIP()[3]) + "/update\r\n");
        sendTXT(num, "0---------------------------------------------------\r\n");

#if SETUPPIN
        // *** Lebowski Inverter ***
        //================================
        /*
          Press RESET (Hold) Press SETUP (Hold), Release RESET, Release SETUP
          RESET = Pin 1 to GND (using NPN transistor)
          SETUP = Pin 19 to GND (using NPN transistor)
        */
        digitalWrite(RESETPIN, HIGH); //ON
        delay(100);
        digitalWrite(SETUPPIN, HIGH); //ON
        delay(100);
        digitalWrite(RESETPIN, LOW); //OFF
        delay(100);
        digitalWrite(SETUPPIN, LOW); //OFF
        //================================
#endif

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

        if (payload[1] == '!') {
          webSocket.sendBIN(num, payload, length);
          ttyFirmware = 1;
        } else if (payload[1] != '\r') {
          webSocket.sendBIN(num, payload, length);

          //DEBUG
          //------------------
          /*
            char str[256];
            snprintf(str, sizeof str, "0%zx", length);
            sendTXT(num, str);
          */
          /*
            uint8_t *p = &payload[1]; //skip first character
            strcat(tty, (char*)p);
          */
          //------------------

          uint8_t *p = &payload[1]; //skip first character
          Serial.print((char*)p);

        } else {

          sendTXT(num, "0\r\n");

          //DEBUG
          /*
            char str[256];
            snprintf(str, sizeof str, "0%s", tty);
            sendTXT(num, str);
            Serial.print("get udc\n");
          */

          Serial.print('\n');
#if CRLF
          Serial.print('\r');
#endif
          uint8_t timeout = 100;
          while (!Serial.available() && timeout > 0) {
            delay(1);
            timeout--;
          }

          do {
            String output = "0" + Serial.readString();
#if CRLF
            output.replace("\n", "\n\r");
#endif
            sendTXT(num, output);
          } while (Serial.available());

          if (ttyFirmware == 1) { //Send Binary Firmware to Serial
            ttyFirmware = 0;
            if (LittleFS.exists("/firmware.bin")) {
              Serial.end();
              Serial.begin(4800, SERIAL_8N1);

              char data[256];
              size_t len = 0;
              File f = LittleFS.open("/firmware.bin", "r");
              do {
                memset(data, 0, sizeof(data));
                len = f.readBytes(data, sizeof(data));
                //sendTXT(num, "0" + String(data) + "\r\n");

                // *** Lebowski Inverter ***
                //================================
                //SEND BINARY is NOT the correct way. Need to send TEXT
                //Serial.write((uint8_t*)data, sizeof(data)); //Binary
                Serial.print(data); //Text
                if (Serial.available()) {
                  sendTXT(num, "0" + Serial.readString() + "\r\n");
                }
                //================================

              } while (len > 0);
              f.close();

              if (Serial.available()) {
                sendTXT(num, "0" + Serial.readString() + "\r\n");
              }
              Serial.end();
              Serial.begin(115200, SERIAL_8N1);
              
            } else {
              sendTXT(num, "0No Firmware Uploaded\r\n");
            }
          }
          /*
            char b[511];
            size_t len = 0;
            do {
            memset(b, 0, sizeof(b));
            len = Serial.readBytes(b, sizeof(b) - 1);
            char c[512] = "0"; strcat(c, b);
            webSocket.sendBIN(num, (uint8_t *)c, sizeof(c) - 1);
            } while (len > 0);
          */
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
