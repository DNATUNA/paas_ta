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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitController = void 0;
var routing_controllers_1 = require("routing-controllers");
var MainService_1 = require("../services/MainService");
var BaseController_1 = require("./BaseController");
var HabitController = /** @class */ (function (_super) {
    __extends(HabitController, _super);
    function HabitController() {
        var _this = _super.call(this) || this;
        _this.mainService = new MainService_1.MainService();
        return _this;
    }
    // Test Main Page GET Method
    HabitController.prototype.findHabit = function (res) {
        return res.send(this.mainService.getMainPage());
    };
    __decorate([
        routing_controllers_1.Get('/'),
        __param(0, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HabitController.prototype, "findHabit", null);
    HabitController = __decorate([
        routing_controllers_1.JsonController('/'),
        __metadata("design:paramtypes", [])
    ], HabitController);
    return HabitController;
}(BaseController_1.BaseController));
exports.HabitController = HabitController;
