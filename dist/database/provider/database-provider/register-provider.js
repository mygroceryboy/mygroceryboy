"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_provider_1 = require("../base-provider");
const user_model_1 = require("../../model/user-model");
const Response_1 = require("../../model/Response");
class RegisterProvider extends base_provider_1.BaseProvider {
    register(user) {
        return new Promise((resolve, reject) => {
            let response = new Response_1.Response(null);
            user_model_1.UserModel.create(user, function (err, dbRes) {
                if (err) {
                    console.log(err);
                    response.status.message = "error occured while creating new user!";
                    reject(response);
                }
                else if (!dbRes) {
                    response.status.message = "failed to create user!";
                    reject(response);
                }
                else {
                    response.status.isSuccessful = true;
                    response.data = dbRes;
                    resolve(response);
                }
            });
        });
    }
}
exports.RegisterProvider = RegisterProvider;
