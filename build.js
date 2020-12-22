// C:\Users\sdkca\Desktop\electron-workspace\build.js
var electronInstaller = require('electron-winstaller');

// In this case, we can use relative paths
var settings = {
    // Specify the folder where the built app is located
    appDirectory: './app-win32-x64',
    // Specify the existing folder where 
    outputDirectory: './app_installer',
    // The name of the Author of the app (the name of your company)
    authors: 'Giv',
    // The name of the executable of your built
    exe: './app.exe',
    // setupIcon: `file://${__dirname}/kaizen.icon`,
    // setupIcon: './dist/assets/kaizen.ico',
    setupIcon: './icons/icon.ico',
    iconUrl: `http://test.padziwe.org/assets/images/kaizen.ico`,
    // 👆 in most cases it only accepts web url and not local file. you might want to serve it over an http server 
    // iconUrl: `./kaizen.ico`,
    setupExe: 'kaizen.exe',
    noMsi: true,
    loadingGif: './icons/loader.gif'
    // 👆 this is the Gif that will appear when app is loading
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were successfully created !");
}, (e) => {
    console.log(`Error occurred during process: ${e.message}`)
});