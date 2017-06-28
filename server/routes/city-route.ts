import { Request, Response, NextFunction } from "express";
import * as express from "express";
import { CityProvider } from "../database/provider/database-provider/city-provider";
import { authenticate } from "./validate-session";

let router = express.Router();
let provider: CityProvider = new CityProvider();

// router.post('', authenticate, (req: Request, res: Response, next: NextFunction) => {
router.post('', (req: Request, res: Response, next: NextFunction) => {
    provider.getCities(req.body.name.trim()).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    })
});

export let cityRoutes: express.Router = router;