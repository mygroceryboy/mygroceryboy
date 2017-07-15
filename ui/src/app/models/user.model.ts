export class User {
    public username: string;
    public email: string;
    public password: string;
    public repeatPassword: string;

    constructor() {
        this.username = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
    }
}