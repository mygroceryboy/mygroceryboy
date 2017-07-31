import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { UserModel } from "../../database/model/user-model";
import { Response } from "../../models/base/response.model";
import { User } from "../../models/user.model";

export class LoginProvider {

    login(user: any): Promise<Response<User>> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response();
            UserModel.findOne({
                $or: [{ email: user.username }, { username: user.username }],
                password: user.password
            },"id name username email userType", function (err: any, dbRes: User) {
                if (err) {
                    console.log(err);
                    response.message = "error occured while getting user data!";
                    reject(response);
                    return;
                }
                console.log(dbRes);
                response.isSuccessful = true;
                response.data = dbRes;
                resolve(response);
            });
        });
    }
}