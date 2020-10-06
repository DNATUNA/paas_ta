"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
// '.env' File Loading
dotenv_1.default.config();
var NODE_ENV = process.env.NODE_ENV || 'dev';
if (NODE_ENV === 'prod')
    dotenv_1.default.config({ path: __dirname + "/../../.env.prod" });
else if (NODE_ENV === 'dev')
    dotenv_1.default.config({ path: __dirname + "/../../.env.dev" });
else if (NODE_ENV === 'test')
    dotenv_1.default.config({ path: __dirname + "/../../.env.test" });
// ENV Module
exports.default = {
    NODE_ENV: NODE_ENV,
    DB_URL: process.env.DB_URL,
    PORT: Number(process.env.PORT),
};
