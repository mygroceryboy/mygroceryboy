import { User } from "../models/user.model";

export class UserInfo {
    public id: string;
    public userId: string;
    public user: User;
    public address1: string;
    public address2: string;
    public city: string;
    public state: string;
    public country: string;
    public description: string;
    public phone: string;

    constructor() {
        this.id = "";
        this.userId = "";
        this.user = new User();
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.description = "";
        this.phone = "";
    }
}