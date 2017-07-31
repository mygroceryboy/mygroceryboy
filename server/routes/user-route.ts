import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { UserProvider } from "../provider/database-provider/user-provider";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session"; 

let router = express.Router();
let provider: UserProvider = new UserProvider();

router.get('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    provider.getAllUsers()
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/:id', authenticate, (req: Request, res: Response, next: NextFunction) => {
    provider.getUser(new ObjectId(req.params.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    req.body.id = new ObjectId(req.body.id);
    provider.updateUser(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    req.body.id = new ObjectId();
    provider.saveUser(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    console.log(req.query.id);

    provider.deleteUser(new ObjectId(req.query.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

export let userRoutes: express.Router = router;
