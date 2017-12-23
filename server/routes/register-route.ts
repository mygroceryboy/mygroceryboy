import { Request, Response, NextFunction } from "express";
import * as express from "express";
import { RegisterProvider } from "../provider/database-provider/register-provider";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session";

let router = express.Router();
let provider: RegisterProvider = new RegisterProvider();

router.post('', (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId();
    provider.register(req.body).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    });
});

export let registerRoutes: express.Router = router;