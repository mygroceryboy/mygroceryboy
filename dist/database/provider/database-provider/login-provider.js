"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_provider_1 = require("../base-provider");
const user_model_1 = require("../../model/user-model");
class LoginProvider extends base_provider_1.BaseProvider {
    getAllUser() {
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
        throw new Error("Method not implemented.");
    }
    updateUser(user) {
        throw new Error("Method not implemented.");
    }
    deleteUser(id) {
        throw new Error("Method not implemented.");
    }
}
exports.LoginProvider = LoginProvider;
