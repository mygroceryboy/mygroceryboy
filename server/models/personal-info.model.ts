import { User } from "../models/user.model";

export class PersonalInfo {
    public id: string;
    public userId: string;
    public address1: string;
    public address2: string;
    public city: string;
    public state: string;
    public country: string;
    public description: string;
    public phone: string;
    public user: User;

    constructor() {
        this.id = "";
        this.userId = "";
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.description = "";
        this.phone = "";
        this.user = new User();
    }
}