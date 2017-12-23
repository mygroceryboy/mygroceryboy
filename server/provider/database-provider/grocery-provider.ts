import { Response } from "../../models/base/response.model";
import { ObjectId } from "bson";
import { Grocery } from "../../models/grocery.model";
import { DbGrocery } from "../../database/model/grocery-item.model";

export namespace GroceryProvider {

    export function getStoreGrocery(_storeId: ObjectId): Promise<Grocery[]> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Grocery[]>();
            DbGrocery
                .find({ _store: _storeId })
                .then((dbRes: any[]) => {
                    response.isSuccessful = true;
                    response.data = dbRes.map(function (item: any) {
                        return Grocery.getGrocery(item);
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

    export function getGroceryItem(_id: ObjectId): Promise<Grocery> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Grocery>();
            DbGrocery
                .findOne({ _id: _id })
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = Grocery.getGrocery(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }

    export function createGroceryItem(grocery: Grocery): Promise<Grocery> {
        grocery.images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImNrmb9FLej0Vk3ao3eniBeseBsPyedSDmoDwUNRpx3-ANGhG"];
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Grocery>();
            DbGrocery
                .create(grocery)
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = Grocery.getGrocery(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }

    export function updateGroceryItem(grocery: Grocery): Promise<Grocery> {
        grocery.images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImNrmb9FLej0Vk3ao3eniBeseBsPyedSDmoDwUNRpx3-ANGhG"];
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Grocery>();
            DbGrocery
                .findOneAndUpdate({ _id: grocery._id }, grocery)
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = Grocery.getGrocery(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }

    export function deleteGroceryItem(_id: ObjectId): Promise<Grocery> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Grocery>();
            DbGrocery
                .findOneAndRemove({ _id: _id })
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = Grocery.getGrocery(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving grocery!";
                    reject(response);
                });
        });
    }
}