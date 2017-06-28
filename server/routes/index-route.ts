import * as path from 'path';
import * as express from "express";

let router = express.Router();

router.get('/inline.bundle.js', (request, response, next) => {
    response.sendFile("inline.bundle.js", { root: "./dist/public" });
});

router.get('/polyfills.bundle.js', (request, response, next) => {
    response.sendFile("polyfills.bundle.js", { root: "./dist/public" });
});

router.get('/styles.bundle.js', (request, response, next) => {
    response.sendFile("styles.bundle.js", { root: "./dist/public" });
});

router.get('/vendor.bundle.js', (request, response, next) => {
    response.sendFile("vendor.bundle.js", { root: "./dist/public" });
});

router.get('/main.bundle.js', (request, response, next) => {
    response.sendFile("main.bundle.js", { root: "./dist/public" });
});

router.get('**', (request, response, next) => {
    response.sendFile("index.html", { root: "./dist/public" });
});

export let indexRoute: express.Router = router;