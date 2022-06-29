import { HelionHomeUrl, searchProductUrl, cardUrl } from "../../config/pagesUrl"
import SearchbarPage from "../../pages/components/SearchbarPage";
import {searchPhrase} from "../../config/data";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/components/ProductPage";

describe("E2E - Products", async()=>{
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
    })
    
    it("Should click on add to card button", async()=>{
        await expect(browser).toHaveUrlContaining(cardUrl);
        
    })
})