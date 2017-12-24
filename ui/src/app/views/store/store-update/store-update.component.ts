import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "../../../models/store.model";
import { PersonalInfo } from "../../../models/personal-info.model";
import { MenuLink } from "../../../redux/app-reducers";
import { StoreService } from "../../../controllers/store/store.service";
import { StorageService } from "../../../services/storage/storage.service";
import { ValidationService } from "../../../services/validation/validation.service";

import * as validations from "../form-validations.json";

@Component({
    selector: 'app-store-update',
    templateUrl: './store-update.component.html',
    styleUrls: ['./store-update.component.css']
})
export class StoreUpdateComponent implements OnInit {

    private model: Store = new Store();
    private errorMessages: Array<string> = [];
    private links: Array<MenuLink>;

    constructor(private _ValidationService: ValidationService,
        private _StoreService: StoreService,
        private _StorageService: StorageService,
        private _Router: Router,
        private _Route: ActivatedRoute) { }

    public ngOnInit(): void {
        if (!this._Route.snapshot.params || !this._Route.snapshot.params.storeId) {
            return;
        }
        this._StoreService
            .getStore(this._Route.snapshot.params.storeId)
            .then((response: Store) => {
                this.model = response;
                this.links = [{ label: 'Store Details', path: "store/" + response._id },
                { label: 'Grocery List', path: `store/${response._id}/grocery/list` },
                { label: 'Add Grocery', path: `store/${response._id}/grocery/new` }];
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    private updateStore(dialog: any): void {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }
        this._StoreService
            .updateStore(this.model)
            .then((response: Store) => {
                this._Router.navigate(['store']);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

}