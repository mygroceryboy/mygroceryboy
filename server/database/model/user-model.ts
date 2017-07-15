import * as mongoose from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants"

let UserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
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
            validator: function (value: string) {
                let type = value.trim().toLowerCase();
                return type === "shopkeeper" || type === "customer";
            }
        }
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
}, { timestamps: true, versionKey: false});

export let UserModel = mongoose.model(APP_CONSTANTS.DB.COLLECTIONS.USERS, UserSchema);