import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "../../../models/store.model";
import { FilterGroup } from "../../../models/filter.model";
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
    private filterJson: any;

    constructor(private route: ActivatedRoute,
        private _Router: Router,
        private _StoreService: StoreService) {
        this.filterJson = filterJson;
        this.route.params.subscribe(params => {
            if (params.query) {
                this.filterJson = JSON.parse(atob(params.query));
            }
        });
    }

    public ngOnInit(): void {
        this.stores = this.route.snapshot.data['stores'];
    }

    private onFilterChange(filter: FilterGroup) {
        this._Router.navigate(['store', 'list', btoa(JSON.stringify(filter))])
    }
}