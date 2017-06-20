"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_provider_1 = require("../base-provider");
const city_model_1 = require("../../model/city.model");
const Response_1 = require("../../model/Response");
class CityProvider extends base_provider_1.BaseProvider {
    insertCities(cities) {
        return new Promise((resolve, reject) => {
            let response = new Response_1.Response(null);
            city_model_1.CityModel.insertMany(cities, function (err, dbRes) {
                if (err) {
                    console.log(err);
                    response.Status.Message = "error occured while inserting city data!";
                    reject(response);
                    return;
                }
                response.Status.IsSuccessful = true;
                response.Data = dbRes;
                resolve(response);
            });
        });
    }
    getCities(name) {
        return new Promise((resolve, reject) => {
            let response = new Response_1.Response(null);
            city_model_1.CityModel.find({ name: { $regex: new RegExp(".*" + name.toLowerCase() + ".*", 'i') } }, function (err, dbRes) {
                if (err) {
                    console.log(err);
                    response.Status.Message = "error occured while getting city data!";
                    reject(response);
                    return;
                }
                console.log(dbRes);
                response.Status.IsSuccessful = true;
                response.Data = dbRes;
                resolve(response);
            });
        });
    }
}
exports.CityProvider = CityProvider;
