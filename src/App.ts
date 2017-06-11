import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { apiRoutes } from './api-routes';
import { DbInitializer } from "./database/db-initializer";

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        apiRoutes.registerApiRoutes(this.express);
        this.connectDatabase();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use('/', express.static(path.join(__dirname, "./public/dist/")));
    }

    private connectDatabase() {
        new DbInitializer().connect()
        .then(() => {
            console.log("database connection successful");
        })
        .catch(() => {
            console.error("database connection faliure!!");
        })
    }
}

export default new App().express;