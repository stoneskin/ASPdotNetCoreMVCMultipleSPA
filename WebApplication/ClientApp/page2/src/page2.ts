import  Page  from "../../shared/src/Page"
import { DefaultPage } from "../../shared/src/Page"

const page: Page = {
    Name: "Page2",
    Title: "Test Page1", Desc: "Description ....",
    PageId: 1
}

function getPage() {
    return page;
}

function getDefaultPagePage() {
    return DefaultPage;
}
alert("Page2:" + getPage().Name +" DefaultPage:"+getDefaultPagePage().Name)


