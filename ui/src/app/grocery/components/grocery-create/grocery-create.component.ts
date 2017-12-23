import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ValidationService } from "../../../utils/validation/validation.service";
import { Grocery } from "../../../models/grocery.model";
import { GroceryService } from "../../services/grocery/grocery.service";
import { StorageService } from "../../../utils/storage/storage.service";
import { PersonalInfo } from "../../../models/personal-info.model";
import { MenuLink } from "../../../utils/redux/app-reducers";

import * as validations from "../../form-validations.json";

@Component({
    selector: "app-grocery-create",
    templateUrl: "./grocery-create.component.html",
    styleUrls: ["./grocery-create.component.css"]
})
export class GroceryCreateComponent implements OnInit {

    private model: Grocery = new Grocery();
    private links:Array<MenuLink>;
    private errorMessages: Array<string> = [];

    constructor(private _ValidationService: ValidationService,
        private _GroceryService: GroceryService,
        private _StorageService: StorageService,
        private _Router: Router,
        private _Route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.model._store = this._Route.snapshot.params.storeId;
        this.links = [{ 
            label: "Store Details", 
            path: "store/" + this._Route.snapshot.params.storeId + "/grocery/new" 
        }];
    }

    private createGrocery(dialog: any): void {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }
        this._GroceryService
            .createGrocery(this.model)
            .then((response: Grocery) => {
                this._Router.navigate(["store", this.model._store, "grocery", "list"]);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }
}