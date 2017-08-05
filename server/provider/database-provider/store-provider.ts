import { DbStore } from "../../database/model/store.model";
import { Response } from "../../models/base/response.model";
import { Store } from "../../models/store.model";
import { ObjectId } from "bson";

export namespace StoreProvider {

    export function getAllStores(): Promise<Store[]> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Store[]>();
            DbStore
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
                    response.message = "error occured while saving personal information!";
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
                    response.data = translate(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving personal information!";
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
                    response.isSuccessful = true;
                    response.data = translate(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving personal information!";
                    reject(response);
                });
        });
    }

    export function updateStore(store: Store): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Store>();
            DbStore
                .findOneAndUpdate({_id: store.id}, store)
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translate(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving personal information!";
                    reject(response);
                });
        });
    }

    export function deleteStore(id: ObjectId): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<Store>();
            DbStore
                .findOneAndRemove({_id: id})
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translate(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving personal information!";
                    reject(response);
                });
        });
    }

    function translate(dbStore: any): Store {
        if (!dbStore) {
            return null;
        }
        return {
            id: dbStore.id,
            personalInfoId: dbStore._personalInfo,
            name: dbStore.name,
            phone: dbStore.phone,
            address1: dbStore.address1,
            address2: dbStore.address2,
            city: dbStore.city,
            state: dbStore.state,
            country: dbStore.country,
            description: dbStore.description,
            account: null,
        };
    }
}