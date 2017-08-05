import { Store } from "./store.model";

export class GroceryItem {
    public id: string;
    public storeId: string;
    public name: string;
    public price: number;
    public description: string;
    public store: Store

    public constructor() {
        this.id = "";
        this.storeId = "";
        this.name = "";
        this.price = 0;
        this.description = "";
        this.store = null;
    }
}