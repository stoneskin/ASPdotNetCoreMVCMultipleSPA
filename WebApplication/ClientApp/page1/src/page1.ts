import { Page}  from "../../shared/src/Page"
export default class Page1 {

    page1: Page = {
        Name: "Page1",
        Title: "Test Page1", Desc: "Description ....",
        PageId: 1
    };
    getPage1() {
    return this.page1;
    }


}