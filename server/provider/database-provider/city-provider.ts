import * as mongoose from "mongoose";
import { ObjectId } from "bson";
import { CityModel } from "../../database/model/city.model";
import { Response } from "../../models/base/response.model";
import { City } from "../../models//city.model";

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
        let self = this;
        return new Promise((resolve: Function, reject: Function) => {
            let response = new Response();
            CityModel.find({ name: { $regex: new RegExp(".*" + name.toLowerCase() + ".*", 'i') } }, function (err: any, dbRes: any) {
                if (err) {
                    console.log(err);
                    response.message = "error occured while getting city data!";
                    reject(response);
                    return;
                }
                response.isSuccessful = true;
                response.data = self.translateCities(dbRes);
                resolve(response);
            });
        });
    }

    translateCities(dbCities: Array<any>): Array<City> {
        let cities: Array<City> = new Array<City>();
        if (!dbCities || !dbCities.length) {
            return cities;
        }
        dbCities.forEach((dbCity: any) => {
            cities.push({
                id: dbCity.id,
                country: dbCity.country || "India",
                name: dbCity.name,
                state: dbCity.state
            });
        });
        return cities;
    }
}