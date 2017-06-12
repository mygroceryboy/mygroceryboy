import * as express from "express";
import { LoginProvider } from "../database/provider/database-provider/login-provider";
import { ObjectId } from "bson";

let router = express.Router();
let provider: LoginProvider = new LoginProvider();

router.get('', (req, res, next) => {
    provider.getAllUsers()
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/:id', (req, res, next) => {
    provider.getUser(new ObjectId(req.params.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('', (req, res, next) => {
    req.body._id = new ObjectId();
    provider.saveUser(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('', (req, res, next) => {
    req.body._id = new ObjectId(req.body._id);
    provider.updateUser(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete('', (req, res, next) => {
    console.log(req.query.id);
    
    provider.deleteUser(new ObjectId(req.query.id))
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        });
});

export let loginRoutes: express.Router = router;
