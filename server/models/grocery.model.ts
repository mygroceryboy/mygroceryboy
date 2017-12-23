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

    public static getGrocery(dbGrocery: any): Grocery {
        let grocery: Grocery = new Grocery();
        if (!dbGrocery) {
            return grocery;
        }
        grocery._id = dbGrocery._id;
        grocery._store = dbGrocery._store && dbGrocery._store._bsontype
            ? dbGrocery._store
            : Store.getStore(dbGrocery._store);
        grocery._user = dbGrocery._user && dbGrocery._user._bsontype
            ? dbGrocery._user
            : User.getUser(dbGrocery._user);
        grocery.name = dbGrocery.name;
        grocery.price = dbGrocery.price;
        grocery.images = dbGrocery.images;
        grocery.description = dbGrocery.description;
        return grocery;
    }
}