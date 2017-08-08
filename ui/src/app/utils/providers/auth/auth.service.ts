import { Injectable } from '@angular/core';
import { StorageService } from "../../storage/storage.service";

@Injectable()
export class AuthService {

    constructor(private _Storage: StorageService) { }

    public clearSession(): void {
        this._Storage.removeItem("user");
        this._Storage.removeItem("user-info");
    }

    public isLoggedIn(): boolean {
        return !!this._Storage.getItem('user');
    }
}