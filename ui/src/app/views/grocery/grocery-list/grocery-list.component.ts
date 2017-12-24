import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Grocery } from "../../../models/grocery.model";
import { GroceryService } from "../../../controllers/grocery/grocery.service";
import { MenuLink } from '../../../redux/app-reducers';

@Component({
    selector: 'app-grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

    private groceries: Array<Grocery> = [];
    private links: Array<MenuLink>;
    private storeId: string;

    constructor(private _Router: Router,
        private _GroceryService: GroceryService,
        private _Route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.storeId = this._Route.snapshot.params.storeId;
        this._GroceryService
            .getGrocerys(this.storeId)
            .then((response: Array<Grocery>) => {
                this.groceries = response;
                this.links = [{
                    label: 'Store Details',
                    path: `store/${this.storeId}`
                }, {
                    label: 'Grocery List',
                    path: `store/${this.storeId}/grocery/list`
                }, {
                    label: 'Add Grocery',
                    path: `store/${this.storeId}/grocery/new`
                }];
            })
            .catch((err: any) => {

            });
    }

    private createGrocery(): void {
        this._Router.navigate(['store', this.storeId, 'grocery', 'new']);
    }

    private getGrocery(groceryId: string): void {
        this._Router.navigate(['store', this.storeId, 'grocery', groceryId]);
    }
}