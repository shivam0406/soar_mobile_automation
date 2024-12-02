const CommonUtils = require('../utils/CommonActions');
const assert = require('assert');

class HomePage {
    // Locators
    get okButton() {
        return $('android=new UiSelector().resourceId("android:id/button1")');
    }

    get historyIcon() {
        return $('//android.widget.FrameLayout[@content-desc="History"]');
    }

    get myListsIcon() {
        return $('//android.widget.FrameLayout[@content-desc="My lists"]');
    }

    get nearbyIcon() {
        return $('//android.widget.FrameLayout[@content-desc="Nearby"]');
    }

    get exploreIcon() {
        return $('//android.widget.FrameLayout[@content-desc="Explore"]');
    }

    // Validation Locators
    get myListsValidation() {
        return $('(//android.widget.TextView[@text="My lists"])[2]');
    }

    get historyValidation() {
        return $('(//android.widget.TextView[@text="History"])[2]');
    }

    get nearbyValidation() {
        return $('(//android.widget.TextView[@text="Nearby"])[2]');
    }

    get homeValidation() {
        return $('//android.widget.ImageView[@resource-id="org.wikipedia.alpha:id/single_fragment_toolbar_wordmark"]');
    }

    // Methods
    async clickOkButton() {
        await CommonUtils.clickIfVisible(this.okButton, 'OK button');
    }

    async clickHistoryIcon() {
        await CommonUtils.clickIfVisible(this.historyIcon, 'History icon');
        await CommonUtils.waitForElement(this.historyValidation, 5000);
        const isHistoryDisplayed = await this.historyValidation.isDisplayed();
        assert.strictEqual(isHistoryDisplayed, true, 'History screen is not displayed.');
        console.log('Validated that History screen is displayed.');
    }

    async clickMyListsIcon() {
        await CommonUtils.clickIfVisible(this.myListsIcon, 'My Lists icon');
        await CommonUtils.waitForElement(this.myListsValidation, 5000);
        const isMyListsDisplayed = await this.myListsValidation.isDisplayed();
        assert.strictEqual(isMyListsDisplayed, true, 'My Lists screen is not displayed.');
        console.log('Validated that My Lists screen is displayed.');
    }

    async clickNearbyIcon() {
        await CommonUtils.clickIfVisible(this.nearbyIcon, 'Nearby icon');
        await CommonUtils.waitForElement(this.nearbyValidation, 5000);
        const isNearbyDisplayed = await this.nearbyValidation.isDisplayed();
        assert.strictEqual(isNearbyDisplayed, true, 'Nearby screen is not displayed.');
        console.log('Validated that Nearby screen is displayed.');
    }

    async clickExploreIcon() {
        await CommonUtils.clickIfVisible(this.exploreIcon, 'Explore icon');
        await CommonUtils.waitForElement(this.homeValidation, 5000);
        const isHomeDisplayed = await this.homeValidation.isDisplayed();
        assert.strictEqual(isHomeDisplayed, true, 'Home screen is not displayed.');
        console.log('Validated that Home screen is displayed.');
    }
}

module.exports = new HomePage();