import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "../../../models/store.model";
import { StoreService } from "../../services/store/store.service";

@Component({
    selector: 'app-store-list',
    templateUrl: './store-list.component.html',
    styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

    private items: Array<Store> = [];

    constructor(private _Router: Router,
        private _StoreService: StoreService) { }

    public ngOnInit(): void {
        this._StoreService
            .getStores()
            .then((response: Array<Store>) => {
                this.items = response;
            })
            .catch((err: any) => {

            });
    }

    private createStore(): void {
        this._Router.navigate(['store', 'new']);
    }

    private getStore(storeId: string): void {
        this._Router.navigate(['store', storeId]);
    }
}