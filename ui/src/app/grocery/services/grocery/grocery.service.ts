import { Injectable } from '@angular/core';
import { Grocery } from "../../../models/grocery.model";
import { Response } from "../../../models/base/response.model";
import { HttpInterceptor as Http } from "app/utils/providers/http-interceptor.service";

@Injectable()
export class GroceryService {

    constructor(private _Http: Http) { }

    public getGrocerys(storeId: string): Promise<Grocery[]> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get(`/api/grocery/all/${storeId}`)
                .subscribe((httpResponse: any) => {
                    let response: Response<Grocery[]> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public getGrocery(groceryId: number): Promise<Grocery> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get('/api/grocery/' + groceryId)
                .subscribe((httpResponse: any) => {
                    let response: Response<Grocery> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public createGrocery(grocery: Grocery): Promise<Grocery> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .put('/api/grocery/', grocery)
                .subscribe((httpResponse: any) => {
                    let response: Response<Grocery> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public updateGrocery(grocery: Grocery): Promise<Grocery> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/grocery/', grocery)
                .subscribe((httpResponse: any) => {
                    let response: Response<Grocery> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public deleteGrocery(groceryId: number): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .delete('/api/grocery/' + groceryId)
                .subscribe((httpResponse: any) => {
                    let response: Response<any> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }
}