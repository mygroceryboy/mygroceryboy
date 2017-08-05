import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { Response } from "../../models/base/response.model";
import { DbPersonalInfo } from "../../database/model/personal-info.model";
import { PersonalInfo } from "../../models/personal-info.model";

export namespace PersonalInfoProvider {

    export function getPersonalInfo(id: ObjectId): Promise<PersonalInfo> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<PersonalInfo>();
            DbPersonalInfo
                .findOne({ _user: id })
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translateUser(dbRes);
                    resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while getting personal information!";
                    reject(response);
                });
        });
    }

    export function getFullPersonalInfo(id: ObjectId): Promise<PersonalInfo> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<PersonalInfo>();
            DbPersonalInfo
                .findById({ _user: id })
                .populate("_user")
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translateUser(dbRes);
                    resolve(response);
                })
                .catch(err => {
                    console.log(err);
                    response.message = "error occured while getting full personal information!";
                    reject(response);
                });
        });
    }

    export function createPersonalInfo(personalInfo: PersonalInfo): Promise<PersonalInfo> {
        let self = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<PersonalInfo>();
            DbPersonalInfo
                .create(personalInfo)
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translateUser(dbRes);
                    resolve(response);
                })
                .catch(err => {
                    console.log(err);
                    response.message = "error occured while saving personal information!";
                    reject(response);
                });
        });
    }

    export function updatePersonalInfo(personalInfo: PersonalInfo): Promise<PersonalInfo> {
        let self = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<PersonalInfo>();
            DbPersonalInfo
                .findOneAndUpdate({ id: personalInfo.id }, personalInfo)
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = translateUser(dbRes);
                    resolve(response);
                })
                .catch(err => {
                    console.log(err);
                    response.message = "error occured while saving personal information!";
                    reject(response);
                });
        });
    }

    export function deletePersonalInfo(id: ObjectId): Promise<boolean> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<PersonalInfo>();
            DbPersonalInfo
                .findOneAndRemove({ _id: id })
                .then((dbRes: any) => {
                    response.isSuccessful = true;
                    response.data = null; //translateUser(dbRes);
                    resolve(response);
                })
                .catch(err => {
                    console.log(err);
                    response.message = "error occured while saving personal information!";
                    reject(response);
                });
        });
    }

    function translateUser(userInfo: any): PersonalInfo {
        if (!userInfo) {
            let info = new PersonalInfo();
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