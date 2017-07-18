import { Request, Response, NextFunction } from "express";
import * as express from "express";
import { CityProvider } from "../provider/database-provider/city-provider";
import { authenticate } from "./validate-session";

let router = express.Router();
let provider: CityProvider = new CityProvider();

router.post('', (req: Request, res: Response, next: NextFunction) => {
});

router.get('/:text', (req: Request, res: Response, next: NextFunction) => {
    provider.getCities(req.params.text.trim()).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    });
});

export let cityRoutes: express.Router = router;