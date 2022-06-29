class ProductPage {
    get ProductTitle (){
        return $("div.title-group > h1 > span[itemprop='name]");
    }

    get addToCardBtn(){
        return $("a#addto Basket_inf041");
    }

    async clickaddToCardBtn(){
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