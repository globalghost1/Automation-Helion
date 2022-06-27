class SearchResultPage {
    get pageTitle() {
        return $("h1#pageTitle")
    }

    async getPageTitle():Promise<string> {
        const h1:WebdriverIO.Element = await this.pageTitle;
        await h1.waitForDisplayed();
        return await h1.getText();
    }

    get booksItem() {
        return $$("ul.list > li");
    }

    async getNumberofBooks():Promise<number> {
        const books:WebdriverIO.Element = await this.booksItem;
        return await books.length;
    }
}

export default new SearchResultPage();