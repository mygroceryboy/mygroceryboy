import * as express from "express";

let router = express.Router();

router.get('', (req, res, next) => {
    res.json({ status: 'login route!' });
});

export let loginRoutes: express.Router = router;
