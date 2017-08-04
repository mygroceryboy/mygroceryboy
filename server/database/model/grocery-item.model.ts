import { model, Schema } from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants";

let GroceryItemSchema = new Schema({
    id: Schema.Types.ObjectId,
    _store: {
        type: Schema.Types.ObjectId,
        ref: 'store',
        required: [true, 'personal info id is required']
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

export let GroceryItemModel = model(APP_CONSTANTS.DB.COLLECTIONS.GROCERY_ITEM, GroceryItemSchema);