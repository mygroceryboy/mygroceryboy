export class User {
    public id: string;
    public username: string;
    public name: string;
    public email: string;
    public password: string;
    public repeatPassword: string;

    constructor() {
        this.id = "";
        this.username = "";
        this.name = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
    }
}