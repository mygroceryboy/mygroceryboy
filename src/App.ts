import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { apiRoutes } from './api-routes';

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        apiRoutes.registerApiRoutes(this.express);
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use('/', express.static(path.join(__dirname, "./public/dist/")));
    }
}

export default new App().express;