@echo off
del build\Release\Graphics.exe
cmake -B build .
msbuild build\Graphics.vcxproj /property:Configuration=Release
build\Release\Graphics.exe