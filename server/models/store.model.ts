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

    public static getStore(dbStore: any): Store {
        let store: Store = new Store();
        if (!dbStore) {
            return store;
        }
        store._id = dbStore._id;
        store._user =  dbStore._user && dbStore._user._bsontype
            ? dbStore._user
            : User.getUser(dbStore._user);
        store.name = dbStore.name;
        store.images = dbStore.images;
        store.phone = dbStore.phone;
        store.address = Address.getAddress(dbStore.address);
        store.description = dbStore.description;
        return store;
    }
}