import { Injectable } from '@angular/core';
import { Http, Response as HttpResponse } from "@angular/http";
import { User } from "../../../models/user.model";
import { Response } from "../../../models/base/response.model";
import { StorageService } from "../../../utils/storage/storage.service";

@Injectable()
export class LoginUserService {

    constructor(private _Http: Http, private _StorageService: StorageService) { }

    public login(user: User): Promise<User> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/login', user)
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
}