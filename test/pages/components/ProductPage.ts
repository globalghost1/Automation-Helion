class ProductPage {
    get ProductTitle (){
        return $("div.title-group > h1 > span[itemprop='name]");
    }

    get addToCardBtn(){
        return $("a#addto Basket_inf041");
    }

    get productPrice() {
        return $("ins#cena_d");
    }


    async getProductPrcie():Promise<string> {
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async GetProductTitleValue():Promise<string> {
        const title:WebdriverIO.Element = await this.ProductTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async clickOnAddToCardBtn(){
        const btn:WebdriverIO.Element = await this.addToCardBtn
        await btn.waitForDisplayed();
        await btn.click();
    }

    async addToCartBtnVisible(){
        const btn:WebdriverIO.Element = await this.addToCardBtn
        await btn.waitForDisplayed();
    }

    async productTitleIsVisible () {
        const title:WebdriverIO.Element = await this.ProductTitle
        await title.waitForDisplayed();
    }

}

export default new ProductPage();