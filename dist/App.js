"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const connectMongo = require("connect-mongo");
const api_routes_1 = require("./api-routes");
const db_initializer_1 = require("./database/db-initializer");
class App {
    constructor() {
        this.MongoStore = connectMongo(session);
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
        this.express.use(session({
            secret: "mygroceryboy",
            resave: false,
            saveUninitialized: true,
            cookie: {
                expires: new Date(Date.now() + (30 * 60 * 1000)),
                maxAge: (30 * 60 * 1000)
            }
        }));
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
