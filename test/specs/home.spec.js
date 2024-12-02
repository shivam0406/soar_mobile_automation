const HomePage = require('../pages/HomePage');
const CommonUtils = require('../utils/CommonActions');

describe('Wikipedia App Home Page Tests', () => {
    beforeEach(async () => {
        console.log('Launching the app...');
        await CommonUtils.handleOkButton(); // Handle OK button at the start
    });

    it('should click on History icon', async () => {
        await HomePage.clickHistoryIcon();
    });

    it('should click on My Lists icon', async () => {
        await HomePage.clickMyListsIcon();
    });

    it('should click on Nearby icon', async () => {
        await HomePage.clickNearbyIcon();
    });

    it('should go back to home by clicking Explore icon', async () => {
        await HomePage.clickExploreIcon();
    });
});