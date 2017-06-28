import * as mongoose from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants"

let CitySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'name is required']
    },
    state: {
        type: String,
        required: [true, 'state is required']
    }
});

export let CityModel = mongoose.model(APP_CONSTANTS.DB.COLLECTIONS.CITY, CitySchema);