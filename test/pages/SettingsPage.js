const assert = require('assert');

class SettingsPage {
    // Locators
    get moreOptions() {
        return $('//android.widget.TextView[@content-desc="More options"]');
    }

    get settingsButton() {
        return $('//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/explore_overflow_settings"]');
    }

    get settingsTitle() {
        return $('//android.widget.TextView[@text="Settings"]');
    }

    get showImagesSwitch() {
        return $('//android.widget.TextView[@resource-id="android:id/title" and @text="Show images"]/parent::android.widget.RelativeLayout/following-sibling::android.widget.LinearLayout/android.widget.Switch');
    }

    get showLinkPreviewsSwitch() {
        return $('//android.widget.TextView[@resource-id="android:id/title" and @text="Show link previews"]/parent::android.widget.RelativeLayout/following-sibling::android.widget.LinearLayout/android.widget.Switch');
    }

    get sendUsageReportsSwitch() {
        return $('//android.widget.TextView[@resource-id="android:id/title" and @text="Send usage reports"]/parent::android.widget.RelativeLayout/following-sibling::android.widget.LinearLayout/android.widget.Switch');
    }

    get sendCrashReportsSwitch() {
        return $('//android.widget.TextView[@resource-id="android:id/title" and @text="Send crash reports"]/parent::android.widget.RelativeLayout/following-sibling::android.widget.LinearLayout/android.widget.Switch');
    }

    // Methods
    async navigateToSettings() {
        // Step 1: Wait for and click the "More options" button
        await this.moreOptions.waitForDisplayed({ timeout: 5000 });
        assert(await this.moreOptions.isDisplayed(), 'More options button is not displayed.');
        assert(await this.moreOptions.isEnabled(), 'More options button is not enabled.');
        await this.moreOptions.click();
        console.log('Clicked on More options.');

        // Step 2: Wait for and click the "Settings" button
        await this.settingsButton.waitForDisplayed({ timeout: 5000 });
        assert(await this.settingsButton.isDisplayed(), 'Settings button is not displayed.');
        assert(await this.settingsButton.isEnabled(), 'Settings button is not enabled.');
        await this.settingsButton.click();
        console.log('Clicked on Settings.');

        // Step 3: Wait for the "Settings" title to be displayed
        await this.settingsTitle.waitForDisplayed({ timeout: 5000 });
        assert(await this.settingsTitle.isDisplayed(), 'Failed to navigate to Settings. Settings title not displayed.');
        console.log('Settings screen is visible.');
    }

    async disableSwitch(switchElement, switchName) {
        const isSwitchOn = await switchElement.getText(); // Fetch the switch text ("ON" or "OFF")
        assert(isSwitchOn === 'ON' || isSwitchOn === 'OFF', `Unexpected state for ${switchName}: ${isSwitchOn}`);
        if (isSwitchOn === 'ON') {
            console.log(`Disabling ${switchName}...`);
            await switchElement.click();

            // Validate that the switch is now OFF
            const isSwitchNowOff = await switchElement.getText();
            assert.strictEqual(isSwitchNowOff, 'OFF', `${switchName} failed to turn off.`);
            console.log(`${switchName} is now disabled.`);
        } else {
            console.log(`${switchName} is already disabled.`);
        }
    }
}

module.exports = new SettingsPage();