import * as mongoose from "mongoose";
import { BaseProvider } from "../base-provider";
import { ObjectId } from "bson";
import { UserModel } from "../../model/user-model";
import { IRegisterProvider } from "../interface/i-register-provider";
import { Response } from "../../model/Response";

export class RegisterProvider extends BaseProvider implements IRegisterProvider {

    register(user: any): Promise<Response<any>> {
        return new Promise((resolve, reject) => {
            let response = new Response(null);
            UserModel.create(user, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.status.message = "error occured while creating new user!";
                    reject(response);
                } else if (!dbRes) {
                    response.status.message = "failed to create user!";
                    reject(response);
                } else {
                    response.status.isSuccessful = true;
                    response.data = dbRes;
                    resolve(response);
                }
            });
        });
    }
}