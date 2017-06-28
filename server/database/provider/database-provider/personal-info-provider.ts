import * as mongoose from "mongoose";
import { BaseProvider } from "../base-provider";
import { ObjectId } from "bson";
import { PersonalInfo } from "../../model/personal-info.model";
import { IPersonalInfoProvider } from "../interface/i-personal-info-provider";

export class PersonalInfoProvider extends BaseProvider implements IPersonalInfoProvider {

    getPersonalInfo(id: ObjectId): Promise<any> {
        return new Promise((resolve, reject) => {
            PersonalInfo
                .findById({ _id: id })
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    getFullPersonalInfo(id: ObjectId): Promise<any> {
        return new Promise((resolve, reject) => {
            PersonalInfo
                .findById({ _id: id })
                .populate("_user")
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    savePersonalInfo(personalInfo: any): Promise<any> {
        return new Promise((resolve, reject) => {
            PersonalInfo
                .create(personalInfo)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    updatePersonalInfo(personalInfo: any): Promise<any> {
        return new Promise((resolve, reject) => {
            PersonalInfo
                .findOneAndUpdate({ _id: personalInfo._id }, personalInfo)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    deletePersonalInfo(id: ObjectId): Promise<boolean> {
        return new Promise((resolve, reject) => {
            PersonalInfo
                .findOneAndRemove({ _id: id })
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}