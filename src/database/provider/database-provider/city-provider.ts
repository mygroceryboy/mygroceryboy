import * as mongoose from "mongoose";
import { BaseProvider } from "../base-provider";
import { ObjectId } from "bson";
import { CityModel } from "../../model/city.model";
import { ICityProvider } from "../interface/i-city-provider";
import { Response } from "../../model/Response";

export class CityProvider extends BaseProvider implements ICityProvider {

    insertCities(cities: Object[]): Promise<Response<boolean>> {
        return new Promise((resolve, reject) => {
            let response = new Response(null);
            CityModel.insertMany(cities, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.status.message = "error occured while inserting city data!";
                    reject(response);
                    return;
                }
                response.status.isSuccessful = true;
                response.data = dbRes;
                resolve(response);
            });
        });
    }

    getCities(name: string): Promise<Response<string[]>> {
        return new Promise((resolve, reject) => {
            let response = new Response(null);
            CityModel.find({ name: { $regex: new RegExp(".*" + name.toLowerCase() + ".*", 'i') } }, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.status.message = "error occured while getting city data!";
                    reject(response);
                    return;
                }
                console.log(dbRes);

                response.status.isSuccessful = true;
                response.data = dbRes;
                resolve(response);
            });
        });
    }
}