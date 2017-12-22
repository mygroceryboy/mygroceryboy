export class Address {
    public address1: String;
    public address2: String
    public city: String;
    public state: String;
    public postCode: String;
    public country: String;

    public constructor() {
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.state = "";
        this.postCode = "";
        this.country = "";
    }

    public static getAddress(address: any): Address {
        if (!address) {
            return new Address();
        }
        return {
            address1: address.address1,
            address2: address.address2,
            city: address.city,
            state: address.state,
            postCode: address.postCode,
            country: address.country
        };
    }
}