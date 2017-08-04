import { model, Schema } from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants";

let StoreSchema = new Schema({
    id: Schema.Types.ObjectId,
    _personalinfo: {
        type: Schema.Types.ObjectId,
        ref: 'personal.info',
        required: [true, 'personal info id is required']
    },
    name: {
        type: String,
        required: [true, 'store name is required']
    },
    address: {
        type: Number,
        required: [true, 'store price is required']
    },
    phone: {
        type: String,
        required: [true, 'phone is required']
    },
    address1: {
        type: String,
        required: [true, 'address line 1 is required']
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required: [true, 'city is required']
    },
    state: {
        type: String,
        required: [true, 'state is required']
    },
    country: {
        type: String,
        required: [true, 'country is required']
    },
    description: {
        type: String
    }

}, { timestamps: true, versionKey: false });

export let StoreModel = model(APP_CONSTANTS.DB.COLLECTIONS.STORE, StoreSchema);