"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_provider_1 = require("../base-provider");
const user_model_1 = require("../../model/user-model");
const Response_1 = require("../../model/Response");
class LoginProvider extends base_provider_1.BaseProvider {
    login(user) {
        return new Promise((resolve, reject) => {
            let response = new Response_1.Response(null);
            user_model_1.UserModel.findOne({
                username: user.username,
                password: user.password
            }, function (err, dbRes) {
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
exports.LoginProvider = LoginProvider;
