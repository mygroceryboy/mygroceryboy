import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { CityModel } from "../../database/model/city.model";
import { Response } from "../../models/base/response.model";

export class CityProvider {

    insertCities(cities: Object[]): Promise<Response<any>> {
        return new Promise((resolve, reject) => {
            let response = new Response();
            CityModel.insertMany(cities, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.message = "error occured while inserting city data!";
                    reject(response);
                    return;
                }
                response.isSuccessful = true;
                response.data = dbRes;
                resolve(response);
            });
        });
    }

    getCities(name: string): Promise<Response<any>> {
        return new Promise((resolve, reject) => {
            let response = new Response();
            CityModel.find({ name: { $regex: new RegExp(".*" + name.toLowerCase() + ".*", 'i') } }, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.message = "error occured while getting city data!";
                    reject(response);
                    return;
                }
                response.isSuccessful = true;
                response.data = dbRes;
                resolve(response);
            });
        });
    }
}