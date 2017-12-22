import { DbStore } from "../../database/model/store.model";
import { Response } from "../../models/base/response.model";
import { Store } from "../../models/store.model";
import { ObjectId } from "bson";
import { Address } from "../../models/base/address.model";
import { User } from "../../models/user.model";

export namespace StoreProvider {

    export function getAllStores(): Promise<Store[]> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Store[]>();
            DbStore
                .find()
                .then((dbRes: any[]) => {
                    response.isSuccessful = true;
                    response.data = dbRes.map(function (item: any) {
                        return Store.getStore(item);
                    });
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while geetting store listing!";
                    reject(response);
                });
        });
    }

    export function getStore(id: ObjectId): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Store>();
            DbStore
                .findOne({ id: id })
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = Store.getStore(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while getting store details!";
                    reject(response);
                });
        });
    }

    export function createStore(store: Store): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Store>();
            DbStore
                .create(store)
                .then((dbRes: any) => {
                    if (!dbRes) {
                        response.isSuccessful = false;
                        response.data = null;
                        response.message = "error occured while saving store details!";
                        return resolve(response);
                    }
                    response.isSuccessful = true;
                    response.message = "store created successfully!";
                    response.data = Store.getStore(dbRes);
                    return resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving store details!";
                    reject(response);
                });
        });
    }

    export function updateStore(store: Store): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Store>();
            DbStore
                .findOneAndUpdate({ id: store.id }, store)
                .then((dbRes: any) => {
                    if (!dbRes) {
                        response.isSuccessful = false;
                        response.data = null;
                        response.message = "error occured while updating store details!";
                        return resolve(response);
                    }
                    response.isSuccessful = true;
                    response.message = "store updated successfully!";
                    response.data = Store.getStore(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while updating store details!";
                    reject(response);
                });
        });
    }

    export function deleteStore(id: ObjectId): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Store>();
            DbStore
                .findOneAndRemove({ id: id })
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = Store.getStore(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while deleting store details!";
                    reject(response);
                });
        });
    }
}