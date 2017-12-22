import { Address } from "./base/address.model";
import { User } from "./user.model";

export class Store {
    public id: string;
    public _user: string | User;
    public name: string;
    public phone: string;
    public address: Address;
    public description: string;

    public constructor() {
        this.id = "";
        this._user = "";
        this.name = "";
        this.phone = "";
        this.description = "";
        this.address = new Address();
    }
}