import { Injectable } from '@angular/core';
import { Http, Response as HttpResponse } from "@angular/http";
import { Store } from "../../../models/store.model";
import { Response } from "../../../models/base/response.model";

@Injectable()
export class StoreService {

    constructor(private _Http: Http) { }

    public getStores(): Promise<Store[]> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get('/api/store')
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<Store[]> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public getStore(storeId: number): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get('/api/store/' + storeId)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<Store> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public createStore(store: Store): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .put('/api/store/', store)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<Store> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public updateStore(store: Store): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/store/', store)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<Store> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public deleteStore(storeId: number): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .delete('/api/store/' + storeId)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<any> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    resolve(response.data);
                });
        });
    }
}