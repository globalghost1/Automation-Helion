
class SearchBarPage {
    get searchInput() {
        return $("#inputSearch"); // pobranie wybranego selektora
    }

    get searchIcon() {
        return $("//button[contains(text(),'Szukaj')]");
    }

    get suggestPopup() {
        return $("form#szukanie div.suggest-list");
    }

    async suggestPopupisVisible() {
        const popup:WebdriverIO.Element = await this.suggestPopup;
        await popup.waitForDisplayed();
    }

    async typeSearchPhrase(value: string) {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value); 
    }

    async clickOnSearchIcon() {
        const icon:WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed();
    }

    async searchBarIsVisible() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed(); //metoda weryfikująca (czeka) az input bedzie widoczny
    }
}

export default new SearchBarPage(); //exportowanie