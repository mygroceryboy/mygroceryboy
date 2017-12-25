import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "../../../models/store.model";
import { Address } from '../../../models/base/address.model';
import { Filter } from "../../../models/filter.model";
import { StoreService } from "../../../controllers/store/store.service";

import * as filterJson from "./filter.json";

@Component({
    selector: 'app-store-list',
    templateUrl: './store-list.component.html',
    styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

    private stores: Array<Store> = [];
    private filterData: Map<string, Array<string>>;
    private filter: Filter;
    private filterJson: any;

    constructor(private _Router: Router,
        private _StoreService: StoreService) { }

    public ngOnInit(): void {
        this.filterJson = filterJson;
        this._StoreService.getStores()
            .then((response: Array<Store>) => {
                this.stores = response;
            });
    }
}