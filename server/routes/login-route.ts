import { Request, Response, NextFunction } from "express";
import * as express from "express";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session";
import { UserProvider } from "../provider/database-provider/user-provider";

let router = express.Router();

router.post('', (req: Request, res: Response, next: NextFunction) => {
    UserProvider.login(req.body).then(response => {
        // req.session.user = req.body;
        // req.session.save(err => {
        //     if (err) {
        //         response.isSuccessful = false;
        //         response.message = "falied to store user information in session!";
        //         response.data = null;
        //         res.json(response);
        //     }
        // });
        res.json(response);
    }).catch(err => {
        res.json(err);
    })
});

export let loginRoutes: express.Router = router;