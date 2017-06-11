import * as express from "express";
import { LoginProvider } from "../database/provider/database-provider/login-provider";
import { ObjectId } from "bson";

let router = express.Router();
let provider: LoginProvider = new LoginProvider();

router.get('/:id', (req, res, next) => {
    provider.getUser(new ObjectId(req.params.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('', (req, res, next) => {
    provider.getAllUser()
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

export let loginRoutes: express.Router = router;
