import { Router, Request, Response, NextFunction } from "express";
import { ObjectId } from "bson";
import { Grocery } from "../models/grocery.model";
import { GroceryProvider } from "../provider/database-provider/grocery-provider";

let router: Router = Router();

//get grocery list
router.get('/all/:storeId', (req: Request, res: Response, next: NextFunction) => {
    GroceryProvider.getStoreGrocery(new ObjectId(req.params.storeId))
        .then((response: Grocery[]) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//get grocery details
router.get('/:groceryId', (req: Request, res: Response, next: NextFunction) => {
    GroceryProvider.getGroceryItem(new ObjectId(req.params.groceryId))
        .then((response: Grocery) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//create new grocery item
router.put('/', (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId();
    req.body._store = new ObjectId(req.body._store);
    req.body._user = new ObjectId(req.body._user);
    GroceryProvider.createGroceryItem(req.body)
        .then((response: Grocery) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//update grocery item
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId(req.body._id);
    req.body._store = new ObjectId(req.body._store);
    req.body._user = new ObjectId(req.body._user);
    GroceryProvider.updateGroceryItem(req.body)
        .then((response: Grocery) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//delete grocery item
router.delete('/:groceryId', (req: Request, res: Response, next: NextFunction) => {
    GroceryProvider.deleteGroceryItem(new ObjectId(req.params.groceryId))
        .then((response: Grocery) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

export let groceryRoutes: Router = router;