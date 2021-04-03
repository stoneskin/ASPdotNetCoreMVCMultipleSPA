define("page1/src/Model/User", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.testUser = void 0;
    var testUser = {
        userId: "testUser",
        emailAddress: "email",
        firstName: "fname",
        lastName: "lname"
    };
    exports.testUser = testUser;
});
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
define("page1/src/page1", ["require", "exports", "page1/src/Model/User", "shared/src/Page"], function (require, exports, User_1, Page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page1 = /** @class */ (function () {
        function Page1() {
        }
        Page1.prototype.getPage = function () {
            return Page_1.DefaultPage;
        };
        ;
        Page1.prototype.getUser = function () {
            return User_1.testUser;
        };
        return Page1;
    }());
    exports.default = Page1;
});
//# sourceMappingURL=Page1.js.map