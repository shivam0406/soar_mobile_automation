const SearchPage = require('../pages/SearchPage');
const CommonUtils = require('../utils/CommonActions');

describe('Wikipedia App Search Tests', () => {

    beforeEach(async () => {
        console.log('Launching the app...');
        await CommonUtils.handleOkButton(); // Handle OK button at the start
    });

    it('should search for "New York" and validate results', async () => {
        await SearchPage.searchFor('New York');
        await SearchPage.validateSearchResults();
    });

    it('should clear the search and return to the home page', async () => {
        await SearchPage.clearSearch();
    });
});