import { Injectable } from '@angular/core';
import { PersonalInfo } from "../../models/personal-info.model";
import { Response } from "../../models/base/response.model";
import { User } from "../../models/user.model";
import { StorageService } from "../../services/storage/storage.service";
import { HttpInterceptor as Http } from "../../services/http-interceptor/http-interceptor.service";

@Injectable()
export class UserService {

    constructor(private _Http: Http, private _StorageService: StorageService) { }

    public login(user: User): Promise<User> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/login', user)
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

    public register(user: User): Promise<User> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/register', user)
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