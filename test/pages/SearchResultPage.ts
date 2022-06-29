import { forEachChild } from "typescript";

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

    get firstBookItem() {
        return $("ul.list > li:nth-forEachChild(1) > a")
    }

    async clickonFirstBookItem() {
        const item:WebdriverIO.Element = await this.firstBookItem;
        await item.waitForDisplayed();
        await item.click();
    }

    async getNumberofBooks():Promise<number> {
        const books:WebdriverIO.Element = await this.booksItem;
        return await books.length;
    }

    
}

export default new SearchResultPage();