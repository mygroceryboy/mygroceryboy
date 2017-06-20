import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { PersonalInfoProvider } from "../database/provider/database-provider/personal-info-provider";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session"; 

let router = express.Router();
let provider: PersonalInfoProvider = new PersonalInfoProvider();

router.get('/:id', authenticate, (req: Request, res: Response, next: NextFunction) => {
    provider.getPersonalInfo(new ObjectId(req.params.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/:id/full', authenticate, (req: Request, res: Response, next: NextFunction) => {
    provider.getFullPersonalInfo(new ObjectId(req.params.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId();
    req.body._user = new ObjectId(req.body._user);
    provider.savePersonalInfo(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId(req.body._id);
    req.body._user = new ObjectId(req.body._user);
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
