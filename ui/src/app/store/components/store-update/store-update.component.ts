import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ValidationService } from "../../../utils/validation/validation.service";
import { Store } from "../../../models/store.model";
import { StoreService } from "../../services/store/store.service";
import { StorageService } from "../../../utils/storage/storage.service";
import { PersonalInfo } from "../../../models/user-info.model";

import * as validations from "../../form-validations.json";

@Component({
    selector: 'app-store-update',
    templateUrl: './store-update.component.html',
    styleUrls: ['./store-update.component.css']
})
export class StoreUpdateComponent implements OnInit {

    private model: Store = new Store();
    private errorMessages: Array<string> = [];

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
            .createStore(this.model)
            .then((response: Store) => {
                this._Router.navigate(['store']);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

}