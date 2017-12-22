export class PersonalInfo {
    public phone: string;
    public address1: string;
    public address2: string;
    public city: string;
    public postCode: string;
    public state: string;
    public country: string;
    public description: string;

    constructor() {
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.postCode = "";
        this.state = "";
        this.country = "";
        this.description = "";
        this.phone = "";
    }
}