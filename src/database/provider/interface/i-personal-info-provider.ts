import { ObjectId } from "bson";
import { PersonalInfo } from "../../model/personal-info.model";

export interface IPersonalInfoProvider {
    getPersonalInfo(id: ObjectId): Promise<any>;
    getFullPersonalInfo(id: ObjectId): Promise<any>;
    savePersonalInfo(personalInfo: any): Promise<any>;
    updatePersonalInfo(personalInfo: any): Promise<any>;
    deletePersonalInfo(id: ObjectId): Promise<boolean>;
}