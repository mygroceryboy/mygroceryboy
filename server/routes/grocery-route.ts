import { Router, Request, Response, NextFunction } from "express";
import { ObjectId } from "bson";
import { GroceryItem } from "../models/grocery.model";
import { GroceryProvider } from "../provider/database-provider/grocery-provider";

let router: Router = Router();

//get grocery list
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    GroceryProvider.getAllGroceryItems()
        .then((response: GroceryItem[]) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//get grocery details
router.get('/:groceryItemId', (req: Request, res: Response, next: NextFunction) => {
    GroceryProvider.getGroceryItem(new ObjectId(req.params.groceryItemId))
        .then((response: GroceryItem) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//create new grocery item
router.put('/', (req: Request, res: Response, next: NextFunction) => {
    req.body.id = new ObjectId();
    req.body._store = new ObjectId(req.body.storeId);
    GroceryProvider.createGroceryItem(req.body)
        .then((response: GroceryItem) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//update grocery item
router.post('/:id', (req: Request, res: Response, next: NextFunction) => {
    req.body.id = new ObjectId(req.body.id);
    req.body._store = new ObjectId(req.body.personalInfoId);
    GroceryProvider.updateGroceryItem(req.body)
        .then((response: GroceryItem) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//delete grocery item
router.delete('/:groceryItemId', (req: Request, res: Response, next: NextFunction) => {
    GroceryProvider.deleteGroceryItem(new ObjectId(req.body.groceryItemId))
        .then((response: GroceryItem) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

export let groceryRoutes: Router = router;