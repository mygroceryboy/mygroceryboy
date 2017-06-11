import * as mongoose from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants"

let LoginSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    email: String,
    password: String,
});

export let UserModel = mongoose.model(APP_CONSTANTS.DB.COLLECTIONS.USERS, LoginSchema);