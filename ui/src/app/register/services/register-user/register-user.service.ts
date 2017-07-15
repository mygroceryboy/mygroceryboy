import { Injectable } from '@angular/core';
import { Http, Response as HttpResponse } from "@angular/http";
import { User } from "../../../models/user.model";
import { Response } from "../../../models/base/response.model";

@Injectable()
export class RegisterUserService {

    constructor(private _Http: Http) { }

    public register(user: User): Promise<User> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .post('/api/register', user)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<User> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    resolve(response.data);
                });
        });
    }
}