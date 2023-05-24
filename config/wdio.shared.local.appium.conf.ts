import { config } from './wdio.shared.conf';

//
// ======
// Appium
// ======
//
config.services = (config.services ? config.services : []).concat([
    [
        'appium',
        {
            // This will use the globally installed version of Appium
            command: 'appium',
            args: {
                // This is needed to tell Appium that we can execute local ADB commands
                // and to automatically download the latest version of ChromeDriver
                relaxedSecurity: true,
                // chromedriverAutodownload: true,
                debugLogSpacing: true,
                address: 'localhost',
                port: 4444
                // For more arguments see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
            },
            logPath: './',
            // path: '/wd/hub',
        },

    ],
]);
//
// =====================
// Server Configurations
// =====================
//
config.port = 4444;

export default config;