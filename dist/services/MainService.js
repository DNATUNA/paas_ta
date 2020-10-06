"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainService = void 0;
var BaseService_1 = require("./BaseService");
var MainService = /** @class */ (function (_super) {
    __extends(MainService, _super);
    function MainService() {
        return _super.call(this) || this;
    }
    MainService.prototype.getMainPage = function () {
        return { title: 'test', body: 'This is Test Page For PaaS-TA' };
    };
    return MainService;
}(BaseService_1.BaseService));
exports.MainService = MainService;
