import { PersonalInfo } from "./user-info.model";

export class Store {
    public id: string;
    public personalInfoId: string;
    public name: string;
    public phone: string;
    public address1: string;
    public address2: string;
    public city: string;
    public state: string;
    public country: string;
    public description: string;
    public account: PersonalInfo

    public constructor() {
        this.id = "";
        this.personalInfoId = "";
        this.name = "";
        this.phone = "";
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.description = "";
        this.account = null;
    }
}