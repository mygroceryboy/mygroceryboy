import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ValidationService } from "../../../utils/validation/validation.service";
import { Grocery } from "../../../models/grocery.model";
import { GroceryService } from "../../services/grocery/grocery.service";
import { MenuLink } from "../../../utils/redux/app-reducers";
import { AuthService } from "../../../utils/providers/auth/auth.service";

import * as validations from "../../form-validations.json";

@Component({
    selector: "app-grocery-create",
    templateUrl: "./grocery-create.component.html",
    styleUrls: ["./grocery-create.component.css"]
})
export class GroceryCreateComponent implements OnInit {

    private model: Grocery;
    private links: Array<MenuLink>;
    private errorMessages: Array<string>;

    constructor(private _ValidationService: ValidationService,
        private _GroceryService: GroceryService,
        private _AuthService: AuthService,
        private _Router: Router,
        private _Route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.model = this.model || new Grocery();
        this.model._user = this._AuthService.user._id;
        this.model._store = this._Route.snapshot.params.storeId;
        this.links = [{ label: 'Grocery List', path: `store/${this._Route.snapshot.params.storeId}/grocery/list` },
            { label: 'Add Grocery', path: `store/${this._Route.snapshot.params.storeId}/grocery/new` }];
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