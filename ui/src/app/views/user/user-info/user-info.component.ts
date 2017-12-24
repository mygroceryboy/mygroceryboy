import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../../models/user.model";
import { City } from "../../../models/city.model";
import { UserService } from "../../../controllers/user/user.service";
import { StorageService } from "../../../services/storage/storage.service";
import { ValidationService } from "../../../services/validation/validation.service";

// validations
import * as validations from "./form-validations.json";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

    @Input()
    public model: User;
    private errorMessages: Array<string> = [];

    constructor(private elementRef: ElementRef,
        private _ValidationService: ValidationService,
        private _UserInfoService: UserService,
        private _StorageService: StorageService,
        private _Router: Router) { }

    public ngOnInit(): void {
    }

    public updateUsereInfo(dialog: any) {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }
        this._UserInfoService.updateUser(this.model).catch((error: any) => {
            console.log(error);
        });
    }

    private userTypeChanged(value: string): void {
        this.model.userType = value === 'SHOPKEEPER' ? 'SHOPKEEPER' : 'CUSTOMER';
    }
}