"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const app_constants_1 = require("../../shared/app-constants");
let LoginSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    email: String,
    password: String,
});
exports.UserModel = mongoose.model(app_constants_1.APP_CONSTANTS.DB.COLLECTIONS.USERS, LoginSchema);
