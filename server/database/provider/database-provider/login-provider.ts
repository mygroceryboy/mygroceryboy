import * as mongoose from "mongoose";
import { BaseProvider } from "../base-provider";
import { ObjectId } from "bson";
import { UserModel } from "../../model/user-model";
import { ILoginProvider } from "../interface/i-login-provider";
import { Response } from "../../model/Response";

export class LoginProvider extends BaseProvider implements ILoginProvider {

    login(user: any): Promise<Response<any>> {
        return new Promise((resolve, reject) => {
            let response = new Response(null);
            UserModel.findOne({
                username: user.username,
                password: user.password
            }, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.Status.Message = "error occured while getting user data!";
                    reject(response);
                    return;
                }
                response.Status.IsSuccessful = true;
                response.Data = dbRes;
                resolve(response);
            });
        });
    }
}