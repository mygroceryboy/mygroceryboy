import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { UserModel } from "../../database/model/user-model";

export class UserProvider {

    getAllUsers(): Promise<any> {
        return new Promise((resolve, reject) => {
            UserModel.find(function (err, response) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
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
        });
    }

    saveUser(user: any): Promise<any> {
        return new Promise((resolve, reject) => {
            UserModel.create(user, function (err, response) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }

    updateUser(user: any): Promise<any> {
        return new Promise((resolve, reject) => {
            UserModel.findOneAndUpdate({
                _id: user._id
            }, user, function (err, response) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }

    deleteUser(id: ObjectId): Promise<boolean> {
        return new Promise((resolve, reject) => {
            UserModel.findOneAndRemove({
                _id: id
            }, function (err, response) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }
}