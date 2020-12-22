# Creating an installable electron app for windows


Article
- https://ourcodeworld.com/articles/read/365/how-to-create-a-windows-installer-for-an-application-built-with-electron-framework

Github
- https://github.com/electron/windows-installer#usage

Make sure you have you JS+HTML in the dist folder
and the icons in the icons folder, inclusive of the loader gif

Steps
> npm install electron-packager -g

> npm install electron -g

Then
> npm install electron-winstaller

> npm install electron-squirrel-startup

Or just run 
> npm install

To create installer
> electron-packager . --platform=win32 --arch=x64 <app name> 

> node build.js
