export default interface Page {
    Name: string;
    Title: string;
    Desc: string;
    PageId: number;
}

const DefaultPage: Page = {
        Name: "Default Page",
        Title: "Test Page default", Desc: "Description ....",
        PageId: 0
};

export { DefaultPage}