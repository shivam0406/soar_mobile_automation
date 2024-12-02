const SettingsPage = require('../pages/SettingsPage');
const CommonUtils = require('../utils/CommonActions');

describe('Wikipedia App Settings Tests', () => {

    beforeEach(async () => {
        console.log('Launching the app...');
        await CommonUtils.handleOkButton(); // Handle OK button at the start
    });

    it('should navigate to Settings and disable switches', async () => {
        await SettingsPage.navigateToSettings();
        await SettingsPage.disableSwitch(SettingsPage.showImagesSwitch, 'Show images');
        await SettingsPage.disableSwitch(SettingsPage.showLinkPreviewsSwitch, 'Show link previews');
        await SettingsPage.disableSwitch(SettingsPage.sendUsageReportsSwitch, 'Send usage reports');
        await SettingsPage.disableSwitch(SettingsPage.sendCrashReportsSwitch, 'Send crash reports');
    });
});