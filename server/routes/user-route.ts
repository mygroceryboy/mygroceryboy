import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { UserProvider } from "../provider/database-provider/user-provider";
import { ObjectId } from "bson";
import { authenticate } from "./validate-session"; 

let router = express.Router();

router.get('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    UserProvider.getAllUsers()
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/:id', authenticate, (req: Request, res: Response, next: NextFunction) => {
    UserProvider.getUser(new ObjectId(req.params.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId(req.body._id);
    UserProvider.updateUser(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('', authenticate, (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId();
    UserProvider.saveUser(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete(':/userId', authenticate, (req: Request, res: Response, next: NextFunction) => {
    UserProvider.deleteUser(new ObjectId(req.body.userId))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

export let userRoutes: express.Router = router;
