const path = require('path');

class CommonActions {
    /**
     * Click on an element if it's visible and enabled
     * @param {WebdriverIO.Element} element - The element to interact with
     * @param {string} elementName - The name of the element (for logging)
     */
    static async clickIfVisible(element, elementName) {
        if (await element.isDisplayed() && await element.isEnabled()) {
            await element.click();
            console.log(`Clicked on ${elementName}.`);
        } else {
            throw new Error(`${elementName} is not ready for interaction.`);
        }
    }

    static async captureScreenshot(filename) {
        const screenshotPath = path.join(__dirname, '../screenshots', `${filename}.png`);
        await browser.saveScreenshot(screenshotPath);
        console.log(`Screenshot saved at: ${screenshotPath}`);
    }

    static async takeScreenshotOnFailure(testName) {
        const screenshotPath = path.join(__dirname, '../screenshots', `${testName}-failure.png`);
        await browser.saveScreenshot(screenshotPath);
        console.error(`Failure screenshot saved at: ${screenshotPath}`);
    }

    /**
     * Wait for an element to be displayed
     * @param {WebdriverIO.Element} element - The element to wait for
     * @param {number} timeout - Timeout in milliseconds
     */
    static async waitForElement(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
        console.log('Element is now visible.');
    }

    /**
     * Handle the OK button if it appears
     */
    static async handleOkButton() {
        try {
            const okButton = await $('android=new UiSelector().resourceId("android:id/button1")');

            if (await okButton.isDisplayed() && await okButton.isEnabled()) {
                await okButton.click();
                console.log('Clicked the OK button successfully.');
            } else {
                console.log('OK button is not ready for interaction.');
            }
        } catch (error) {
            console.log('OK button not found or already dismissed.');
        }
    }
}

module.exports = CommonActions;