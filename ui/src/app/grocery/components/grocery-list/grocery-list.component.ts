import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Grocery } from "../../../models/grocery.model";
import { GroceryService } from "../../services/grocery/grocery.service";
import { MenuLink } from '../../../utils/redux/app-reducers';

@Component({
    selector: 'app-grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

    private items: Array<Grocery> = [];
    private links: Array<MenuLink>;

    constructor(private _Router: Router,
        private _GroceryService: GroceryService,
        private _Route: ActivatedRoute) { }

    public ngOnInit(): void {
        if (!this._Route.snapshot.params || !this._Route.snapshot.params.storeId) {
            return;
        }
        this._GroceryService
            .getGrocerys(this._Route.snapshot.params.storeId)
            .then((response: Array<Grocery>) => {
                this.items = response;
                this.links = [{
                    label: 'Store Details',
                    path: `store/${this._Route.snapshot.params.storeId}`
                }, {
                    label: 'Grocery List',
                    path: `store/${this._Route.snapshot.params.storeId}/grocery/list`
                }, {
                    label: 'Add Grocery',
                    path: `store/${this._Route.snapshot.params.storeId}/grocery/new`
                }];
            })
            .catch((err: any) => {

            });
    }

    private createGrocery(): void {
        this._Router.navigate(['store', this._Route.snapshot.params.storeId, 'grocery', 'new']);
    }

    private getGrocery(groceryId: string): void {
        this._Router.navigate(['store', this._Route.snapshot.params.storeId, 'grocery', groceryId]);
    }
}