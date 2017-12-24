import { Injectable } from '@angular/core';
import { Http, Response as HttpResponse } from "@angular/http";
import { City } from "../../models/city.model";
import { Response } from "../../models/base/response.model";

@Injectable()
export class LocationService {

    constructor(private _Http: Http) { }

    public getCities(text: string): Promise<Array<City>> {
        return new Promise((resolve: Function, reject: Function) => {
            return this._Http
                .get('/api/cities/' + text)
                .subscribe((httpResponse: HttpResponse) => {
                    let response: Response<Array<City>> = httpResponse.json();
                    if (!response || !response.isSuccessful) {
                        reject(null);
                    }
                    resolve(response.data);
                });
        });
    }

    public getCityDropdownList(cities: Array<City>): Array<any> {

        let dropdownCities: Array<any> = [];

        if (!cities || !cities.length) {
            return dropdownCities;
        }

        cities.forEach((city: City) => {
            dropdownCities.push({
                text: city.name + " (" + city.state + ", " + city.country +")",
                value: city
            });
        });

        return dropdownCities;
    }

}