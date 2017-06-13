import * as path from 'path';
import * as express from "express";

let router = express.Router();

router.get('**', (request, response, next) => {
    response.sendFile("index.html", { root: "./dist/public/dist" });
});

export let indexRoute: express.Router = router;