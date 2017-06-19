"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const app_constants_1 = require("../../shared/app-constants");
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
exports.CityModel = mongoose.model(app_constants_1.APP_CONSTANTS.DB.COLLECTIONS.CITY, CitySchema);
