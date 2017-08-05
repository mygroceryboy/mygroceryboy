import { Request, Response, NextFunction, Router } from "express";
import { PersonalInfoProvider } from "../provider/database-provider/personal-info-provider";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session"; 

let router = Router();

router.get('/:userId', authenticate, (req: Request, res: Response, next: NextFunction) => {
    PersonalInfoProvider.getPersonalInfo(new ObjectId(req.params.userId))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/:userId/full', authenticate, (req: Request, res: Response, next: NextFunction) => {
    PersonalInfoProvider.getFullPersonalInfo(new ObjectId(req.params.userId))
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
    PersonalInfoProvider.createPersonalInfo(req.body)
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
    PersonalInfoProvider.updatePersonalInfo(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    PersonalInfoProvider.deletePersonalInfo(new ObjectId(req.query.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

export let personalInfoRoutes: Router = router;
