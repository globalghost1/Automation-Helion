import { HelionHomeUrl, searchProductUrl, cardUrl } from "../../config/pagesUrl"
import SearchbarPage from "../../pages/components/SearchbarPage";
import {alertmessage, deletedProductMessage, searchPhrase} from "../../config/data";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/components/ProductPage";
import CardPage from "../../pages/components/CardPage";

describe("E2E - Products", async()=>{
    let productTitle:string = "";
    let price:string

    before(()=>{
        browser.url(HelionHomeUrl);
    })
    
    it("Should type seach phrase and click search icon", async()=>{
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl);
    })

    it("Should click on first book", async()=>{
        await SearchResultPage.clickonFirstBookItem();
        await browser.pause(4000);
        await ProductPage.productTitleIsVisible();
        await ProductPage.addToCartBtnVisible();
        productTitle = await ProductPage.getProductTitleValue();
        price = await ProductPage.getProductPrcie();

    })
    
    it("Should click on add to card button", async()=>{
        await ProductPage.clickOnAddtoCardBtn();
        await expect(browser).toHaveUrlContaining(cardUrl);
        await expect(await CardPage.getSuccessAlertValue()).toContain(productTitle);
        await expect(await CardPage.getTotalPriceValue()).toContain(price);
    })

    it("Should delete product form card", async () => {
        await CardPage.clickOnCheckbox();
        await (await CardPage.deleteSelectedLabal).click();
        await expect(await browser.getAlertText()).toContain(alertmessage);
        await CardPage.acceptDeleteAlert();
        await expect(await CardPage.getDeletedAlertMessage()).toContain(deletedProductMessage);
    })
})