import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ValidationService } from "../../../utils/validation/validation.service";
import { Grocery } from "../../../models/grocery.model";
import { GroceryService } from "../../services/grocery/grocery.service";
import { StorageService } from "../../../utils/storage/storage.service";
import { PersonalInfo } from "../../../models/personal-info.model";
import { MenuLink } from "../../../utils/redux/app-reducers";

import * as validations from "../../form-validations.json";

@Component({
    selector: 'app-grocery-update',
    templateUrl: './grocery-update.component.html',
    styleUrls: ['./grocery-update.component.css']
})
export class GroceryUpdateComponent implements OnInit {

    private model: Grocery = new Grocery();
    private errorMessages: Array<string> = [];
    private links:Array<MenuLink>;

    constructor(private _ValidationService: ValidationService,
        private _GroceryService: GroceryService,
        private _StorageService: StorageService,
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
                this.links = [{label: 'Grocery Details', path: "grocery/list/" + response.id}];
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
                this._Router.navigate(['grocery']);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

}