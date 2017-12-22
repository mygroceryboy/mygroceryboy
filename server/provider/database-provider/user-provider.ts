import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { UserModel } from "../../database/model/user-model";
import { User } from "../../models/user.model";
import { Response } from "../../models/base/response.model";
import { PersonalInfo } from "../../models/personal-info.model";

export class UserProvider {

    public getAllUsers(): Promise<Response<User>> {
        return new Promise((resolve: Function, reject: Function) => {
            UserModel.find(function (err: any, response: any) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }

    public getUser(id: ObjectId): Promise<Response<User>> {
        return new Promise((resolve: Function, reject: Function) => {
            UserModel.findById({
                id: id
            }, function (err: any, response: any) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }

    public saveUser(user: User): Promise<Response<User>> {
        return new Promise((resolve: Function, reject: Function) => {
            UserModel.create(user, function (err: any, response: any) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }

    public updateUser(user: User): Promise<Response<User>> {
        let self = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<User>();
            UserModel.findOneAndUpdate({ 
                id: user.id 
            }, {
                id: user.id,
                username: user.username,
                name: user.name,
                userType: user.userType,
                email: user.email,
                personalInfo: user.personalInfo
            }, { 
                new: true 
            }, function (err: any, dbRes: any) {
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

    public deleteUser(id: ObjectId): Promise<boolean> {
        return new Promise((resolve: Function, reject: Function) => {
            UserModel.findOneAndRemove({
                id: id
            }, function (err: any, response: any) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }

    private translateUser(dbUser: any): User {
        if (!dbUser) {
            let user = new User();
            return user;
        }
        return {
            id: dbUser.id,
            username: dbUser.username,
            name: dbUser.name,
            userType: dbUser.userType,
            email: dbUser.email,
            password: null,
            personalInfo: this.translatePersonalInfo(dbUser.personalInfo)
        };
    }

    private translatePersonalInfo(personalInfo: any): PersonalInfo {
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