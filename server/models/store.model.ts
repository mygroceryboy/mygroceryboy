import { PersonalInfo } from "./personal-info.model";

export class Store {
    public id: string;
    public _personalInfo: string;
    public name: string;
    public phone: string;
    public address1: string;
    public address2: string;
    public city: string;
    public state: string;
    public country: string;
    public description: string;
    public personalInfo: PersonalInfo

    public constructor() {
        this.id = "";
        this._personalInfo = "";
        this.name = "";
        this.phone = "";
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.description = "";
        this.personalInfo = null;
    }
}