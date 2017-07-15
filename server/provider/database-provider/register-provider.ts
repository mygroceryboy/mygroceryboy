import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { UserModel } from "../../database/model/user-model";
import { Response } from "../../database/model/Response";

export class RegisterProvider {

    register(user: any): Promise<Response<any>> {
        return new Promise((resolve, reject) => {
            let response = new Response();
            UserModel.create(user, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.message = "error occured while creating new user!";
                    reject(response);
                } else if (!dbRes) {
                    response.message = "failed to create user!";
                    reject(response);
                } else {
                    response.isSuccessful = true;
                    response.data = dbRes;
                    resolve(response);
                }
            });
        });
    }
}