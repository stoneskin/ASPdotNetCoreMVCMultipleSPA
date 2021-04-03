define("shared/src/Page", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultPage = void 0;
    var DefaultPage = {
        Name: "Default Page",
        Title: "Test Page default", Desc: "Description ....",
        PageId: 0
    };
    exports.DefaultPage = DefaultPage;
});
define("page2/src/page2", ["require", "exports", "shared/src/Page"], function (require, exports, Page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page2;
    (function (Page2) {
        var page = {
            Name: "Page2",
            Title: "Test Page1", Desc: "Description ....",
            PageId: 1
        };
        function getPage() {
            return page;
        }
        function getDefaultPagePage() {
            return Page_1.DefaultPage;
        }
    })(Page2 || (Page2 = {}));
});
//# sourceMappingURL=page2.js.map