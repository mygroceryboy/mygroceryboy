"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_provider_1 = require("../base-provider");
const user_model_1 = require("../../model/user-model");
class LoginProvider extends base_provider_1.BaseProvider {
    getAllUsers() {
        return new Promise((resolve, reject) => {
            user_model_1.UserModel.find(function (err, response) {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }
    getUser(id) {
        return new Promise((resolve, reject) => {
            user_model_1.UserModel.findById({
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
    saveUser(user) {
        return new Promise((resolve, reject) => {
            user_model_1.UserModel.create(user, function (err, response) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    }
    updateUser(user) {
        return new Promise((resolve, reject) => {
            user_model_1.UserModel.findOneAndUpdate({
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
    deleteUser(id) {
        return new Promise((resolve, reject) => {
            user_model_1.UserModel.findOneAndRemove({
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
exports.LoginProvider = LoginProvider;
