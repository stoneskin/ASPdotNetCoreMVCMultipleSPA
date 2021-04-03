"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./Model/User");
var Page_1 = require("../../shared/src/Page");
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
//# sourceMappingURL=page1.js.map