import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { Response } from "../../models/base/response.model";
import { PersonalInfo } from "../../database/model/personal-info.model";
import { UserInfo } from "../../models/user-info.model";

export class PersonalInfoProvider {

    getPersonalInfo(id: ObjectId): Promise<any> {
        let self = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response();
            PersonalInfo
                .findOne({ _user: id }, function (err: any, dbRes: any) {
                    if (err) {
                        console.log(err);
                        response.message = "error occured while creating new user!";
                        reject(response);
                    } else {
                        response.isSuccessful = true;
                        response.data = self.translateUser(dbRes);
                        resolve(response);
                    }
                });
        });
    }

    getFullPersonalInfo(id: ObjectId): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            PersonalInfo
                .findById({ _user: id })
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
        let self = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response();
            PersonalInfo
                .create(personalInfo, function (err: any, dbRes: any) {
                    if (err) {
                        console.log(err);
                        response.message = "error occured while creating new user!";
                        reject(response);
                    } else if (!dbRes) {
                        response.message = "failed to create user!";
                        reject(response);
                    } else {
                        response.isSuccessful = true;
                        response.data = self.translateUser(dbRes);
                        resolve(response);
                    }
                });
        });
    }

    updatePersonalInfo(personalInfo: any): Promise<any> {
        let self = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response();
            PersonalInfo
                .findOneAndUpdate({ id: personalInfo.id }, personalInfo, function (err: any, dbRes: any) {
                    if (err) {
                        console.log(err);
                        response.message = "error occured while creating new user!";
                        reject(response);
                    } else if (!dbRes) {
                        response.message = "failed to create user!";
                        reject(response);
                    } else {
                        response.isSuccessful = true;
                        response.data = self.translateUser(dbRes);
                        resolve(response);
                    }
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

    private translateUser(userInfo: any): UserInfo {
        if (!userInfo) {
            let info = new UserInfo();
            info.user = null;
            return info;
        }
        return {
            id: userInfo.id,
            userId: userInfo._user,
            user: null,
            address1: userInfo.address1,
            address2: userInfo.address2,
            city: userInfo.city,
            state: userInfo.state,
            country: userInfo.country,
            description: userInfo.description,
            phone: userInfo.phone
        };
    }
}