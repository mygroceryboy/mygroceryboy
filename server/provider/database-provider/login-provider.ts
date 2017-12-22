import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { UserModel } from "../../database/model/user-model";
import { Response } from "../../models/base/response.model";
import { User } from "../../models/user.model";
import { PersonalInfo } from "../../models/personal-info.model";

export class LoginProvider {

    private self: LoginProvider;

    constructor() {
        this.self = this;
    }

    public login(user: any): Promise<Response<User>> {
        let self: LoginProvider = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response();
            UserModel.findOne({
                $or: [{ email: user.username }, { username: user.username }],
                password: user.password
            }, function (err: any, dbRes: User) {
                if (err) {
                    console.log(err);
                    response.message = "error occured while getting user data!";
                    reject(response);
                    return;
                }
                if (!dbRes) {
                    console.log(err);
                    response.message = "user does not exist!";
                    reject(response);
                    return;
                }
                response.isSuccessful = true;
                response.message = "Successfully logged in as " + dbRes.name;
                response.data = self.translateUser(dbRes);
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