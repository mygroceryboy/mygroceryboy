import { Injectable } from '@angular/core';
import { StorageService } from "../storage/storage.service";
import { User } from 'app/models/user.model';

@Injectable()
export class AuthService {

    constructor(private _Storage: StorageService) { }

    public get user(): User {
        return this._Storage.getItem('user') as User;
    }
    public set user(v: User) {
        !!v ? this._Storage.addItem('user', v) : this._Storage.removeItem('user');
    }


    public clearSession(): void {
        this._Storage.removeItem("user");
        this._Storage.removeItem("user-info");
    }

    public isLoggedIn(): boolean {
        return !!this._Storage.getItem('user');
    }
}