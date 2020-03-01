#==============
#Copy Files
#==============
Remove-Item -Recurse -Force .\spiffs -ErrorAction SilentlyContinue
Copy-Item -Path .\Web -Recurse -Destination .\spiffs -Container
Remove-Item .\spiffs\img

#==============
#Compress Files
#==============
Get-ChildItem .\spiffs -Recurse -Filter *.* | 
Foreach-Object {
    if (-Not (Test-Path $_.FullName -PathType Container)) {
        Start-Process .\tools\gzip.exe -ArgumentList $_.FullName -NoNewWindow -Wait
        Move-Item "$($_.FullName).gz" -Destination $_.FullName
    }
}

Start-Process .\tools\mkspiffs.exe -ArgumentList "-c .\spiffs -b 8192 -p 256 -s 200000 flash-spiffs.bin" -NoNewWindow -PassThru -Wait