import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "../../../models/store.model";
import { User } from '../../../models/user.model';
import { StoreService } from "../../../controllers/store/store.service";
import { StorageService } from "../../../services/storage/storage.service";
import { ValidationService } from "../../../services/validation/validation.service";

import * as validations from "../form-validations.json";

@Component({
    selector: 'app-store-create',
    templateUrl: './store-create.component.html',
    styleUrls: ['./store-create.component.css']
})
export class StoreCreateComponent implements OnInit {

    private model: Store = new Store();
    private errorMessages: Array<string> = [];

    constructor(private _ValidationService: ValidationService,
        private _StoreService: StoreService,
        private _StorageService: StorageService,
        private _Router: Router) { }

    public ngOnInit(): void {
        let user: User = this._StorageService.getItem('user');
        this.model._user = user._id;
    }

    private createStore(dialog: any): void {
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