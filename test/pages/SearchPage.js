const CommonUtils = require('../utils/CommonActions');
const assert = require('assert');

class SearchPage {
    // Locators
    get searchBar() {
        return $('//android.widget.TextView[@text="Search Wikipedia"]');
    }

    get searchTextView() {
        return $('//android.widget.AutoCompleteTextView[@resource-id="org.wikipedia.alpha:id/search_src_text"]');
    }

    get searchResults() {
        return $('//android.widget.ListView[@resource-id="org.wikipedia.alpha:id/search_results_list"]');
    }

    get clearQueryButton() {
        return $('//android.widget.ImageView[@content-desc="Clear query"]');
    }

    get homeSearchBar() {
        return $('//android.widget.TextView[@text="Search Wikipedia"]');
    }

    // Methods
    async searchFor(keyword) {
        await CommonUtils.clickIfVisible(this.searchBar, 'Search Bar');
        console.log('Clicked on Search Bar.');

        await this.searchTextView.setValue(keyword);
        console.log(`Entered "${keyword}" in the Search Text View.`);

        // Validate that the search results list starts to appear
        await this.validateSearchResults();
    }

    async validateSearchResults() {
        try {
            // Wait for search results to be displayed with a timeout
            await this.searchResults.waitForDisplayed({ timeout: 10000 }); // Wait up to 10 seconds
            const isResultsDisplayed = await this.searchResults.isDisplayed();
            assert.strictEqual(isResultsDisplayed, true, 'Search results are not displayed.');
            console.log('Search results are displayed.');
        } catch (error) {
            throw new Error('Search results are not displayed within the timeout period.');
        }
    }

    async clearSearch() {
        // Double-click on the "Clear query" button
        await this.clearQueryButton.click();
        console.log('Clicked on Clear Query button once.');

        await this.clearQueryButton.click();
        console.log('Clicked on Clear Query button again to clear the search.');

        // Validate that we are back on the home page with the search bar visible
        await CommonUtils.waitForElement(this.homeSearchBar, 5000);
        const isHomeSearchBarDisplayed = await this.homeSearchBar.isDisplayed();
        assert.strictEqual(isHomeSearchBarDisplayed, true, 'Search Bar is not visible on the home page.');
        console.log('Returned to the home page. Search Bar is visible.');
    }
}

module.exports = new SearchPage();