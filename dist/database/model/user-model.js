"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const app_constants_1 = require("../../shared/app-constants");
let UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'name is required']
    },
    username: {
        type: String,
        required: [true, 'user name is required']
    },
    usertype: {
        type: String,
        validate: {
            validator: function (value) {
                let type = value.trim().toLowerCase();
                return type === "shopkeeper" || type === "customer";
            }
        },
        required: [true, 'user type is required']
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(v);
            },
            message: '{VALUE} is not a valid email id!'
        },
        required: [true, 'email id is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
});
exports.UserModel = mongoose.model(app_constants_1.APP_CONSTANTS.DB.COLLECTIONS.USERS, UserSchema);
