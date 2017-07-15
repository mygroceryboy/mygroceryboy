import * as mongoose from "mongoose";
import { BaseProvider } from "../base-provider";
import { ObjectId } from "bson";
import { UserModel } from "../../model/user-model";
import { Response } from "../../model/Response";

export class LoginProvider extends BaseProvider {

    login(user: any): Promise<Response<any>> {
        return new Promise((resolve, reject) => {
            let response = new Response();
            UserModel.findOne({
                username: user.username,
                password: user.password
            }, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.message = "error occured while getting user data!";
                    reject(response);
                    return;
                }
                response.isSuccessful = true;
                response.data = dbRes;
                resolve(response);
            });
        });
    }
}