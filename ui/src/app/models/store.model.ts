import { Address } from "./base/address.model";
import { User } from "./user.model";

export class Store {
    public _id: string;
    public _user: string | User;
    public name: string;
    public images: Array<string>;
    public phone: string;
    public address: Address;
    public description: string;

    public constructor() {
        this._id = "";
        this._user = "";
        this.name = "";
        this.images = [];
        this.phone = "";
        this.description = "";
        this.address = new Address();
    }
}