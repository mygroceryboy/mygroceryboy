import { PersonalInfo } from "./personal-info.model";
export type USER_TYPE = "SHOPKEEPER" | "CUSTOMER";

export class User {
    public _id: string;
    public username: string;
    public name: string;
    public userType: USER_TYPE;
    public email: string;
    public password: string;
    public repeatPassword: string;
    public personalInfo: PersonalInfo;

    constructor() {
        this._id = "";
        this.username = "";
        this.userType = "SHOPKEEPER";
        this.name = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
        this.personalInfo = new PersonalInfo();
    }
}