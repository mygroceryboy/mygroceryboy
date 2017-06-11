import * as mongoose from "mongoose";
import { BaseProvider } from "../base-provider";
import { ObjectId } from "bson";
import { UserModel } from "../../model/user-model";
import { ILoginProvider } from "../interface/i-login-provider";

export class LoginProvider extends BaseProvider implements ILoginProvider {

    getAllUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            UserModel.find(function (err, response) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        })
    }

    getUser(id: ObjectId): Promise<any> {
        return new Promise((resolve, reject) => {
            UserModel.findById({
                _id: id
            }, function (err, response) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        })
    }

    saveUser(user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    updateUser(user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    deleteUser(id: ObjectId): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}