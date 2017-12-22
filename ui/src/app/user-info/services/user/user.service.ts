import { Injectable } from '@angular/core';
import { PersonalInfo } from "../../../models/personal-info.model";
import { Response } from "../../../models/base/response.model";
import { StorageService } from "../../../utils/storage/storage.service";
import { User } from "../../../models/user.model";
import { HttpInterceptor as Http } from "app/utils/providers/http-interceptor.service";

@Injectable()
export class UserService {

    constructor(private _Http: Http, private _StorageService: StorageService) { }

    public getUser(userId: string): Promise<User> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get('/api/user/' + userId)
                .subscribe((httpResponse: any) => {
                    let response: Response<User> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    this._StorageService.addItem("user", response.data, false);
                    resolve(response.data);
                });
        });
    }

    public addUser(userInfo: User): Promise<User> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .put('/api/user', userInfo)
                .subscribe((httpResponse: any) => {
                    let response: Response<User> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    this._StorageService.addItem("user", response.data, false);
                    resolve(response.data);
                });
        });
    }

    public updateUser(userInfo: User): Promise<User> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/user', userInfo)
                .subscribe((httpResponse: any) => {
                    let response: Response<User> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        return reject(null);
                    }
                    this._StorageService.addItem("user", response.data, false);
                    resolve(response.data);
                });
        });
    }
}