import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { PersonalInfo } from "../../database/model/personal-info.model";

export class PersonalInfoProvider {

    getPersonalInfo(id: ObjectId): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
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
        return new Promise((resolve: Function, reject: Function) => {
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
        return new Promise((resolve: Function, reject: Function) => {
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
        return new Promise((resolve: Function, reject: Function) => {
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
        return new Promise((resolve: Function, reject: Function) => {
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