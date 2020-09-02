<p align="center"><img src="Web/img/xterm.png?raw=true"></p>

# ESP8266 XTerm - UART Web Interface

A simple web interface based on [ttyd](https://github.com/tsl0922/ttyd) for UART/TTL with ESP8266.

## Screenshot

![Screenshot](Web/img/screenshot.png?raw=true)

## Download

![ESP8266](Web/img/esp8266.png?raw=true) [Download for ESP8266](../../releases/download/1.0/ESP8266-XTerm.zip)

## Connect

    SSID: XTerm
    Password: (blank)
    Interface: http://192.168.4.1

## Install

    1) Connect to ESP8266 USB-Serial-TTL
    2) Run sketch.ps1 flash "flash-sketch.bin"
    3) Run littlefs.ps1 flash "flash-littlefs.bin"

## Update

    1) Connect to ESP8266 WiFi
    2) Go to http://192.168.4.1/update

## Build

    [Arduino IDE Setup]

    1) Arduino/File -> Preferences -> Additional Boards Manager URLs: http://arduino.esp8266.com/stable/package_esp8266com_index.json
    2) Tools -> Boards -> Board Manager -> esp8266 -> Install
    3) Tools -> Boards -> WeMos D1 R1 -> Flash Size -> 4M (3M SPIFFS)

    [Build]

    1) Run littlefs-build-osx.sh (littlefs-build-win.ps1 Windows) build LittleFS filesystem
    2) Open ESP8266-XTerm.ino with Arduino IDE
    3) Sketch -> Export compiled Binary

## Author

Dima Dykhman

## License

[![CC0](https://licensebuttons.net/l/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)