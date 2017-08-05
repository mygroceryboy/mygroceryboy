import { Router, Request, Response, NextFunction } from "express";
import { ObjectId } from "bson";
import { StoreProvider } from "../provider/database-provider/store-provider";
import { Store } from "../models/store.model";

let router: Router = Router();

//get grocery list
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    StoreProvider.getAllStores()
        .then((response: Store[]) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//get grocery details
router.get('/:storeId', (req: Request, res: Response, next: NextFunction) => {
    StoreProvider.getStore(new ObjectId(req.params.storeId))
        .then((response: Store) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//create new grocery item
router.put('/', (req: Request, res: Response, next: NextFunction) => {
    req.body.id = new ObjectId();
    req.body._personalInfo = new ObjectId(req.body.personalInfoId);
    StoreProvider.createStore(req.body)
        .then((response: Store) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//update grocery item
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    req.body.id = new ObjectId(req.body.id);
    req.body._personalInfo = new ObjectId(req.body.personalInfoId);
    StoreProvider.updateStore(req.body)
        .then((response: Store) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//delete grocery item
router.delete('/:storeId', (req: Request, res: Response, next: NextFunction) => {
    StoreProvider.deleteStore(new ObjectId(req.body.storeId))
        .then((response: Store) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

export let storeRoutes: Router = router;