"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const api_routes_1 = require("./api-routes");
const db_initializer_1 = require("./database/db-initializer");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        api_routes_1.apiRoutes.registerApiRoutes(this.express);
        this.connectDatabase();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use('/', express.static(path.join(__dirname, "./public/dist/")));
    }
    connectDatabase() {
        new db_initializer_1.DbInitializer().connect()
            .then(() => {
            console.log("database connection successful");
        })
            .catch(() => {
            console.error("database connection faliure!!");
        });
    }
}
exports.default = new App().express;
