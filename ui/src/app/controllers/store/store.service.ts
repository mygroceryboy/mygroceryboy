import { Injectable } from '@angular/core';
import { Store } from "../../models/store.model";
import { Response } from "../../models/base/response.model";
import { HttpInterceptor as Http } from "../../services/http-interceptor/http-interceptor.service";
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class StoreService {

    constructor(private _Http: Http,
        private _AuthService: AuthService) { }

    public getStores(query: string = ""): Promise<Store[]> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get(`/api/store/all/${this._AuthService.user._id}${query}`)
                .subscribe((httpResponse: any) => {
                    let response: Response<Store[]> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public getStore(storeId: number): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get('/api/store/' + storeId)
                .subscribe((httpResponse: any) => {
                    let response: Response<Store> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public createStore(store: Store): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .put('/api/store/', store)
                .subscribe((httpResponse: any) => {
                    let response: Response<Store> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public updateStore(store: Store): Promise<Store> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/store/', store)
                .subscribe((httpResponse: any) => {
                    let response: Response<Store> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public deleteStore(storeId: number): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .delete('/api/store/' + storeId)
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