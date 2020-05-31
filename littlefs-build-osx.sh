#!/bin/bash

rm -rf ./data
cp -rf  ./Web ./data
rm -rf ./data/img

mkdir -p tools

if [ ! -f tools/mklittlefs ]; then
    curl -L -o tools/x86_64-apple-darwin14-mklittlefs-1c43629.tar.gz -k -C - https://github.com/earlephilhower/mklittlefs/releases/download/2.5.1-2/x86_64-apple-darwin14-mklittlefs-1c43629.tar.gz
    cd tools
    gunzip -c x86_64-apple-darwin14-mklittlefs-1c43629.tar.gz | tar xopf -
    mv mklittlefs ./mklittlefs-1c43629
    mv mklittlefs-1c43629/mklittlefs ./
    rm -rf mklittlefs-1c43629
    cd ../
fi

for f in $(find data -type f -name '*.*'); do
    gzip "$f"
    mv "$f.gz" "$f"
done

./tools/mklittlefs -c ./data/ -b 8192 -p 256 -s 200000 flash-littlefs.bin