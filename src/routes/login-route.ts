import { Request, Response, NextFunction } from "express";
import * as express from "express";
import { LoginProvider } from "../database/provider/database-provider/login-provider";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session";

let router = express.Router();
let provider: LoginProvider = new LoginProvider();

router.post('', (req: Request, res: Response, next: NextFunction) => {
    provider.login(req.body).then(response => {
        req.session.user = req.body;
        req.session.save(err => {
            if (err) {
                response.status.isSuccessful = false;
                response.status.message = "falied to store user information in session!";
                response.data = null;
                res.json(response);
            }
            res.json(response);
        });
    }).catch(err => {
        res.json(err);
    })
});

export let loginRoutes: express.Router = router;