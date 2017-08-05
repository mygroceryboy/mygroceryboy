import { Injectable } from '@angular/core';
import { User } from "../../../models/user.model";
import { Response } from "../../../models/base/response.model";
import { StorageService } from "../../../utils/storage/storage.service";
import { HttpInterceptor as Http } from "app/utils/providers/http-interceptor.service";

@Injectable()
export class RegisterUserService {

    constructor(private _Http: Http, private _StorageService: StorageService) { }

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
}