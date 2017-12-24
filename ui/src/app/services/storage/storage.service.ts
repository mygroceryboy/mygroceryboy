import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
    appStorage: any = {};

    constructor() { }

    public addItem(key: string, value: any, isLocalStorage: boolean = false): boolean {
        if (!this.checkStorageSupport) {
            this.appStorage[key.trim()] = value;
            console.warn("no browser storage support found, app storage is being used");
            return true;
        }

        try {
            isLocalStorage
                ? localStorage.setItem(key.trim(), JSON.stringify(value))
                : sessionStorage.setItem(key.trim(), JSON.stringify(value));
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public getItem(key: string, isLocalStorage: boolean = false): any {
        if (!this.checkStorageSupport) {
            return this.appStorage[key.trim()];
        }

        let value: any;

        try {
            value = isLocalStorage
                ? localStorage.getItem(key.trim())
                : sessionStorage.getItem(key.trim());
            return value ? JSON.parse(value) : value;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public removeItem(key: string, isLocalStorage: boolean = false): boolean {
        if (!this.checkStorageSupport) {
            return this.appStorage[key.trim()];
        }

        let value: any;

        try {
            value = isLocalStorage
                ? localStorage.removeItem(key.trim())
                : sessionStorage.removeItem(key.trim());
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    private get checkStorageSupport(): boolean {
        return !!typeof Storage;
    }
}