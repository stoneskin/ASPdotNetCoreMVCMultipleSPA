import { Page } from "../shared/Page"
namespace Page2 {

    const page: Page = {
        Name: "Page2",
        Title: "Test Page1", Desc: "Description ....",
        PageId: 1
    }

    function getPage() {
        return page;
    }
}