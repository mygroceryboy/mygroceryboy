import { Request, Response, NextFunction } from "express";
import * as express from "express";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session";
import { UserProvider } from "../provider/database-provider/user-provider";

let router = express.Router();

router.post('', (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId();
    UserProvider.saveUser(req.body).then((response: any) => {
        res.json(response);
    }).catch((err: any) => {
        res.json(err);
    });
});

export let registerRoutes: express.Router = router;