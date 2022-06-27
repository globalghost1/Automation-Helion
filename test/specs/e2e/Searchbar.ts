import GlobalPage from "../../pages/GlobalPage";
import SearchbarPage from "../../pages/components/SearchbarPage";
import {HelionHomeUrl} from "../../config/pagesUrl";
import { searchPhrase } from "../../config/data";


describe("E2E - Searchbar", async()=>{
    it("Should open Helion home page, verify url and visible searchbar", async()=> {
        await GlobalPage.openPage(HelionHomeUrl, HelionHomeUrl);
        await SearchbarPage.searchBarIsVisible();
    })

    it("Should click on search icon and verify url", async()=>{
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(HelionHomeUrl);
    })

    it("Should type search value nad verify visible popup", async()=> {
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.suggestPopupisVisible();
        
    })
})

