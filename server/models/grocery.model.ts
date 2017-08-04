import { UserInfo } from "./user-info.model";

export class GroceryItem {
    public id: string;
    public userInfoId: string;
    public name: string;
    public price: number;
    public description: string;
    public account: UserInfo

    public constructor() {
        this.id = "";
        this.userInfoId = "";
        this.name = "";
        this.price = 0;
        this.description = "";
        this.account = null;
    }
}