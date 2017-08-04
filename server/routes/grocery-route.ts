import { Router, Request, Response, NextFunction } from "express";
import { ObjectId } from "bson";

let router: Router = Router();

//get grocery list
router.get('/', (req: Request, res: Response, next: NextFunction) => {

});

//get grocery details
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {

});

//create new grocery item
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {

});

//update grocery item
router.post('/:id', (req: Request, res: Response, next: NextFunction) => {

});

//delete grocery item
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {

});