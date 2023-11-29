@echo off
cd %~dp0
npm run docs:build
npm run docs:preview
pause
