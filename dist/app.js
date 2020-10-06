"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var morgan_1 = __importDefault(require("morgan"));
var routing_controllers_1 = require("routing-controllers");
var index_1 = __importDefault(require("./configs/index"));
var app = express_1.default();
if (index_1.default.NODE_ENV === 'prod') {
    // Production Setting
}
routing_controllers_1.useExpressServer(app, {
    controllers: [__dirname + "/controllers/**"],
    validation: false,
});
morgan_1.default.token('date', function () {
    return moment_timezone_1.default().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
});
morgan_1.default.format('myformat', ':remote-addr - :remote-user [:date] ":method :url" :status :res[content-length] - :response-time ms');
exports.default = app;
