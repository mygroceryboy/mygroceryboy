import { Injectable } from '@angular/core';
import { Http, Response as HttpResponse } from "@angular/http";
import { UserInfo } from "../../../models/user-info.model";
import { Response } from "../../../models/base/response.model";
import { StorageService } from "../../../utils/storage/storage.service";
import { User } from "../../../models/user.model";

@Injectable()
export class UserInfoService {

    constructor(private _Http: Http, private _StorageService: StorageService) { }

    public getUser(userId: string): Promise<User> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get('/api/user/' + userId)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<User> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
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
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<User> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
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
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<User> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    this._StorageService.addItem("user", response.data, false);
                    resolve(response.data);
                });
        });
    }

    public getUserInfo(userId: string): Promise<UserInfo> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get('/api/personal-info/' + userId)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<UserInfo> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    this._StorageService.addItem("user-info", response.data, false);
                    resolve(response.data);
                });
        });
    }

    public addUserInfo(userInfo: UserInfo): Promise<UserInfo> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .put('/api/personal-info', userInfo)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<UserInfo> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    this._StorageService.addItem("user-info", response.data, false);
                    resolve(response.data);
                });
        });
    }

    public updateUserInfo(userInfo: UserInfo): Promise<UserInfo> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/personal-info', userInfo)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<UserInfo> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    this._StorageService.addItem("user-info", response.data, false);
                    resolve(response.data);
                });
        });
    }
}