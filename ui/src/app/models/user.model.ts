export type USER_TYPE = "SHOPKEEPER" | "CUSTOMER";

export class User {
    public id: string;
    public username: string;
    public name: string;
    public userType: USER_TYPE;
    public email: string;
    public password: string;
    public repeatPassword: string;

    constructor() {
        this.id = "";
        this.username = "";
        this.userType = "SHOPKEEPER";
        this.name = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
    }
}