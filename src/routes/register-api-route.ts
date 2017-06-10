import * as express from "express";

let router = express.Router();

router.get('', (req, res, next) => {
    res.json({ status: 'register route!' });
});

export let registerRoutes: express.Router = router;
