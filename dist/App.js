"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const api_routes_1 = require("./api-routes");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        api_routes_1.apiRoutes.registerApiRoutes(this.express);
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use('/', express.static(path.join(__dirname, "./public/dist/")));
    }
}
exports.default = new App().express;
