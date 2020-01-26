#!/bin/bash

if [ ! -f tools/mkspiffs ]; then
    curl -L -o tools/mkspiffs-0.2.3-arduino-esp8266-osx.tar.gz -k -C - https://github.com/igrr/mkspiffs/releases/download/0.2.3/mkspiffs-0.2.3-arduino-esp8266-osx.tar.gz
    cd tools
    gunzip -c mkspiffs-0.2.3-arduino-esp8266-osx.tar.gz | tar xopf -
    mv mkspiffs-0.2.3-arduino-esp8266-osx/mkspiffs ./
    rm -rf mkspiffs-0.2.3-arduino-esp8266-osx
    rm -rf mkspiffs-0.2.3-arduino-esp8266-osx.tar.gz
    cd ../
fi
mv ./Web/img ./tools/
./tools/mkspiffs -c ./Web/ -b 8192 -p 256 -s 600000 flash-spiffs.bin
mv ./tools/img ./Web/