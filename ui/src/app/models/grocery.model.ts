import { Store } from "./store.model";
import { User } from "./user.model";

export class Grocery {
    public _id: string;
    public _store: string | Store;
    public _user: string | User;
    public name: string;
    public price: number;
    public images: Array<string>;
    public description: string;

    public constructor() {
        this._id = "";
        this._store = "";
        this._user = "";
        this.name = "";
        this.price = 0;
        this.images = [];
        this.description = "";
    }
}