export class PersonalInfo {
    public phone: string;
    public address1: string;
    public address2: string;
    public city: string;
    public postCode: string;
    public state: string;
    public country: string;
    public description: string;

    public constructor() {
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.postCode = "";
        this.state = "";
        this.country = "";
        this.description = "";
        this.phone = "";
    }

    public static getPersonalInfo(personalInfo: any): PersonalInfo {
        if (!personalInfo) {
            let info = new PersonalInfo();
            return info;
        }
        return {
            address1: personalInfo.address1,
            address2: personalInfo.address2,
            city: personalInfo.city,
            state: personalInfo.state,
            country: personalInfo.country,
            description: personalInfo.description,
            phone: personalInfo.phone,
            postCode: personalInfo.postCode
        };
    }
}