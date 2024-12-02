exports.config = {
    runner: 'local',
    port: 4723, // Default Appium server port
    path: '/wd/hub',
    specs: ['./test/specs/**/*.js'], // Location of your test files
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': '25231JEGR22254',
            'appium:platformVersion': '15', // Replace with your Android version
            'appium:automationName': 'UiAutomator2',
            'appium:app': '/Users/akankshagupta/Desktop/WikipediaSample.apk', // Path to your APK
            'appium:autoGrantPermissions': true,
            'appium:appPackage': 'org.wikipedia.alpha', // The app package
        'appium:appActivity': 'org.wikipedia.main.MainActivity', // The app activity
        'appium:autoGrantPermissions': true,
        'appium:noSign': true, // Disable APK signing
        },
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    reporters: [
        ['allure', {
            outputDir: 'allure-results', 
            disableWebdriverStepsReporting: true, 
            disableWebdriverScreenshotsReporting: false, 
        }],
    ],
    services: [
        [
            'appium',
            {
                command: 'appium', // Use the globally installed Appium
            },
        ],
    ],
};