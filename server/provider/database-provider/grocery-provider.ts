import { Response } from "../../models/base/response.model";
import { ObjectId } from "bson";
import { GroceryItem } from "../../models/grocery.model";
import { DbGroceryItem } from "../../database/model/grocery-item.model";

export namespace GroceryProvider {

    export function getAllGroceryItems(): Promise<GroceryItem[]> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<GroceryItem[]>();
            DbGroceryItem
                .find()
                .then((dbRes: any[]) => {
                    response.isSuccessful = true;
                    response.data = dbRes.map(function (item: any) {
                        return translate(item);
                    });
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }

    export function getGroceryItem(id: ObjectId): Promise<GroceryItem> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<GroceryItem>();
            DbGroceryItem
                .findOne({ _id: id })
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translate(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }

    export function createGroceryItem(groceryItem: GroceryItem): Promise<GroceryItem> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<GroceryItem>();
            DbGroceryItem
                .create(groceryItem)
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translate(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }

    export function updateGroceryItem(groceryItem: GroceryItem): Promise<GroceryItem> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<GroceryItem>();
            DbGroceryItem
                .findOneAndUpdate({_id: groceryItem.id}, groceryItem)
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translate(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }

    export function deleteGroceryItem(id: ObjectId): Promise<GroceryItem> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<GroceryItem>();
            DbGroceryItem
                .findOneAndRemove({_id: id})
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translate(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }

    function translate(dbGroceryItem: any): GroceryItem {
        if (!dbGroceryItem) {
            return null;
        }
        return {
            id: dbGroceryItem.id,
            storeId: dbGroceryItem._groceryItem,
            name: dbGroceryItem.name,
            price: dbGroceryItem.price,
            description: dbGroceryItem.description,
            store : null
        };
    }
}