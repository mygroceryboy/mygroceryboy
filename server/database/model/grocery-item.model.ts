import { model, Schema } from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants";

let GrocerySchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: APP_CONSTANTS.DB.COLLECTIONS.USERS,
        required: [true, 'user id is required']
    },
    _store: {
        type: Schema.Types.ObjectId,
        ref: APP_CONSTANTS.DB.COLLECTIONS.STORES,
        required: [true, 'store id is required']
    },
    name: {
        type: String,
        required: [true, 'grocery item name is required']
    },
    price: {
        type: Number,
        required: [true, 'grocery item price is required']
    },
    description: {
        type: String,
        required: [true, 'grocery item description is required']
    }

}, { timestamps: true, versionKey: false });

export let DbGrocery = model(APP_CONSTANTS.DB.COLLECTIONS.GROCERY, GrocerySchema);