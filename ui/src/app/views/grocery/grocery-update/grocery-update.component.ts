import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ValidationService } from "../../../services/validation/validation.service";
import { Grocery } from "../../../models/grocery.model";
import { GroceryService } from "../../../controllers/grocery/grocery.service";
import { MenuLink } from "../../../redux/app-reducers";

import * as validations from "../form-validations.json";

@Component({
    selector: 'app-grocery-update',
    templateUrl: './grocery-update.component.html',
    styleUrls: ['./grocery-update.component.css']
})
export class GroceryUpdateComponent implements OnInit {

    private model: Grocery = new Grocery();
    private errorMessages: Array<string>;
    private links: Array<MenuLink>;

    constructor(private _ValidationService: ValidationService,
        private _GroceryService: GroceryService,
        private _Router: Router,
        private _Route: ActivatedRoute) { }

    public ngOnInit(): void {
        if (!this._Route.snapshot.params || !this._Route.snapshot.params.groceryId) {
            return;
        }
        this._GroceryService
            .getGrocery(this._Route.snapshot.params.groceryId)
            .then((response: Grocery) => {
                this.model = response;
                this.links = [{
                    label: 'Store Details',
                    path: `store/${response._store}`
                }, {
                    label: 'Grocery List',
                    path: `store/${response._store}/grocery/list`
                }, {
                    label: 'Grocery Details',
                    path: `store/${response._store}/grocery/${response._id}`
                }];
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    private updateGrocery(dialog: any): void {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }
        this._GroceryService
            .updateGrocery(this.model)
            .then((response: Grocery) => {
                this._Router.navigate(['store', this.model._store, 'grocery', 'list']);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

}