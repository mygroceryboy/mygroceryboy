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
    private filterGroup: FilterGroup;

    constructor(private route: ActivatedRoute,
        private _Router: Router,
        private _StoreService: StoreService) {
        this.filterGroup = JSON.parse(JSON.stringify(filterJson));
        this.route.params.subscribe(params => {
            if (params.query) {
                this.filterGroup = JSON.parse(atob(params.query));
            }
        });
    }

    public ngOnInit(): void {
        this.stores = this.route.snapshot.data['stores'];
    }

    private onFilterChange(filter: FilterGroup) {
        this._Router.navigate(['store', 'list', filter == null ? "" : btoa(JSON.stringify(filter))])
    }
}