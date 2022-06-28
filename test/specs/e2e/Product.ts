import { HelionHomeUrl, searchProductUrl } from "../../config/pagesUrl"
import SearchbarPage from "../../pages/components/SearchbarPage";
import {searchPhrase} from "../../config/data";

describe("E2E - Products", async()=>{
    before(()=>{
        browser.url(HelionHomeUrl);
    })
    
    it("Should type seach phrase and click search icon", async()=>{
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl);
    })
})