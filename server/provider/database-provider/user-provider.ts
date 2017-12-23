import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { DbUser } from "../../database/model/user-model";
import { User } from "../../models/user.model";
import { Response } from "../../models/base/response.model";
import { PersonalInfo } from "../../models/personal-info.model";

export namespace UserProvider {

    export function getAllUsers(): Promise<Response<User>> {
        return new Promise((resolve: Function, reject: Function) => {
            DbUser.find(function (err: any, response: any) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }

    export function getUser(_id: ObjectId): Promise<Response<User>> {
        return new Promise((resolve: Function, reject: Function) => {
            DbUser.findById({
                _id: _id
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

    export function login(user: any): Promise<Response<User>> {
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<User>();
            DbUser.findOne({
                $or: [{ email: user.username }, { username: user.username }],
                password: user.password
            })
            .then((dbRes: any) => {
                if (!dbRes) {
                    response.message = "user does not exist!";
                    reject(response);
                    return;
                }
                response.isSuccessful = true;
                response.message = "Successfully logged in as " + dbRes.name;
                response.data = User.getUser(dbRes);
                resolve(response);
            })
            .catch((err: any) => {
                console.log(err);
                response.message = "error occured while fetching user details!";
                reject(response);
            });
        });
    }

    export function saveUser(user: User): Promise<Response<User>> {
        user.personalInfo = null;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<User>();
            DbUser
                .create(user)
                .then((dbRes: any) => {
                    if (!dbRes) {
                        response.isSuccessful = false;
                        response.data = null;
                        response.message = "error occured while saving user details!";
                        return resolve(response);
                    }
                    response.isSuccessful = true;
                    response.message = "user created successfully!";
                    response.data = User.getUser(dbRes);
                    return resolve(response);
                })
                .catch((err: any) => {
                    console.log(err);
                    response.message = "error occured while saving user details!";
                    reject(response);
                });
        });
    }

    export function updateUser(user: User): Promise<Response<User>> {
        let self = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response<User>();
            DbUser.findOneAndUpdate({ 
                _id: user._id 
            }, {
                _id: user._id,
                username: user.username,
                name: user.name,
                userType: user.userType,
                email: user.email,
                personalInfo: user.personalInfo
            }, { 
                new: true 
            })
            .then((dbRes: any) => {
                if (!dbRes) {
                    response.isSuccessful = false;
                    response.data = null;
                    response.message = "error occured while updating user details!";
                    return resolve(response);
                }
                response.isSuccessful = true;
                response.message = "user info updated successfully!";
                response.data = User.getUser(dbRes);
                return resolve(response);
            })
            .catch((err: any) => {
                console.log(err);
                response.message = "error occured while updating user details!";
                reject(response);
            });;
        });
    }

    export function deleteUser(_id: ObjectId): Promise<boolean> {
        return new Promise((resolve: Function, reject: Function) => {
            DbUser.findOneAndRemove({
                _id: _id
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
}