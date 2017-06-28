import { ObjectId } from "bson";
import { Response } from "../../model/Response";

export interface ICityProvider {
    getCities(name:string): Promise<Response<Array<string>>>;
    insertCities(cities:Array<Object>): Promise<Response<boolean>>;
}