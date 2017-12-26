import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router"
import { Store } from "../models/store.model";
import { StoreService } from "../controllers/store/store.service";
import { Page } from "../models/base/response.model";

@Injectable()
export class StoreListResolverService implements Resolve<Store[]> {
    constructor(private _StoreService: StoreService) { }

    resolve(route: ActivatedRouteSnapshot) {
        //pagination
        let query: string = route.params && route.params.query ? "?filter=" + route.params.query : "";
        return this._StoreService.getStores(query);
    }
}