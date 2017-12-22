import { model, Schema } from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants";

export let AddressSchema = new Schema({
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
    }

}, { id: false, _id: false });