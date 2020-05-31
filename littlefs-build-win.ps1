#==============
#Copy Files
#==============
Remove-Item -Recurse -Force .\data -ErrorAction SilentlyContinue
Copy-Item -Path .\Web -Recurse -Destination .\data -Container
Remove-Item .\data\img

#==============
#Compress Files
#==============
Get-ChildItem .\data -Recurse -Filter *.* | 
Foreach-Object {
    if (-Not (Test-Path $_.FullName -PathType Container)) {
        Start-Process .\tools\gzip.exe -ArgumentList $_.FullName -NoNewWindow -Wait
        Move-Item "$($_.FullName).gz" -Destination $_.FullName
    }
}

Start-Process .\tools\mklittlefs.exe -ArgumentList "-c .\data -b 8192 -p 256 -s 200000 flash-littlefs.bin" -NoNewWindow -PassThru -Wait