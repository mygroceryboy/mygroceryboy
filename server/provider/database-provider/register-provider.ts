import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { DbUser } from "../../database/model/user-model";
import { Response } from "../../models/base/response.model";
import { User } from "../../models/user.model";

export class RegisterProvider {

    register(user: User): Promise<Response<User>> {
        user.personalInfo = null;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response();
            DbUser.create(user, function (err: any, dbRes: User) {
                if (err) {
                    console.log(err);
                    response.message = "error occured while creating new user!";
                    reject(response);
                } else if (!dbRes) {
                    response.message = "failed to create user!";
                    reject(response);
                } else {
                    response.isSuccessful = true;
                    response.data = User.getUser(dbRes);
                    resolve(response);
                }
            });
        });
    }
}