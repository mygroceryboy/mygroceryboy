import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { PersonalInfoProvider } from "../provider/database-provider/personal-info-provider";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session"; 

let router = express.Router();
let provider: PersonalInfoProvider = new PersonalInfoProvider();

router.get('/:userId', authenticate, (req: Request, res: Response, next: NextFunction) => {
    provider.getPersonalInfo(new ObjectId(req.params.userId))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/:userId/full', authenticate, (req: Request, res: Response, next: NextFunction) => {
    provider.getFullPersonalInfo(new ObjectId(req.params.userId))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    req.body.id = new ObjectId();
    req.body._user = new ObjectId(req.body.userId);
    provider.savePersonalInfo(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    req.body.id = new ObjectId(req.body.id);
    req.body._user = new ObjectId(req.body.userId);
    provider.updatePersonalInfo(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    provider.deletePersonalInfo(new ObjectId(req.query.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

export let personalInfoRoutes: express.Router = router;
