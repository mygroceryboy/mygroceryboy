import * as path from 'path';
import * as express from "express";

let router = express.Router();

router.get('**', (req, res, next) => {
    console.log(__dirname);
    
    res.sendFile("index.html", {root: "./dist/public/dist"});
});

export let indexRoute: express.Router = router;