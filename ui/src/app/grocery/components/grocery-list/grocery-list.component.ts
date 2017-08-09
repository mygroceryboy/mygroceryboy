import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Grocery } from "../../../models/grocery.model";
import { GroceryService } from "../../services/grocery/grocery.service";

@Component({
    selector: 'app-grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

    private items: Array<Grocery> = [];

    constructor(private _Router: Router,
        private _GroceryService: GroceryService) { }

    public ngOnInit(): void {
        this._GroceryService
            .getGrocerys()
            .then((response: Array<Grocery>) => {
                this.items = response;
            })
            .catch((err: any) => {

            });
    }

    private createGrocery(): void {
        this._Router.navigate(['grocery', 'new']);
    }

    private getGrocery(groceryId: string): void {
        this._Router.navigate(['grocery', 'list', groceryId]);
    }
}