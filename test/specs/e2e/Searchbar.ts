import GlobalPage from "../../pages/GlobalPage";
import SearchbarPage from "../../pages/components/SearchbarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import {HelionHomeUrl,SearchPageUrl} from "../../config/pagesUrl";
import { incorrectSeachPhrase, notFoundMessage, searchPhrase, searchResultTitle } from "../../config/data";


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

    it("Should click on see all books button", async()=>{
        await SearchbarPage.clickonSeeAllBooksBtn();
        await expect(browser).toHaveUrl(SearchPageUrl);
    })

    it("Should verify visible corretly title and number of books", async()=> {
        const title:string = await SearchResultPage.getPageTitle();
        const numberOfBooks:number = await SearchResultPage.getNumberofBooks();
        await expect(title).toContain(searchResultTitle);
        await expect(numberOfBooks).toEqual(20);
    })

    it("Should clear input value", async()=>{
        await SearchbarPage.clearSearchBar();
        await expect (await SearchbarPage.GetInputValue()).toContain("");
    })

   it("Should type incorrect book name and verify alert", async()=> {
       await SearchbarPage.typeSearchPhrase(incorrectSeachPhrase);
       await SearchbarPage.clickOnSearchIcon();
       await expect(await SearchbarPage.getNotFoundAlertText()).toContain(notFoundMessage);
    })

    it("Should clear input value and click on search icon", async() => {
        
    })

})

