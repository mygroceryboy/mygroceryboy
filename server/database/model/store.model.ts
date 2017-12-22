import { model, Schema } from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants";
import { AddressSchema } from "./address.model";

let StoreSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'user id is required']
    },
    name: {
        type: String,
        required: [true, 'store name is required']
    },
    phone: {
        type: String,
        required: [true, 'phone is required']
    },
    address: {
        type: AddressSchema,
        required: [true, 'address is required']
    },
    description: {
        type: String
    }

}, { timestamps: true, versionKey: false });

export let DbStore = model(APP_CONSTANTS.DB.COLLECTIONS.STORE, StoreSchema);