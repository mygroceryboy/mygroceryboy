import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { ValidationService } from "../../..//utils/validation/validation.service";
import { PersonalInfo } from "../../../models/user-info.model";
import { User } from "../../../models/user.model";
import { UserInfoService } from "../../services/user-info/user-info.service";
import { LocationService } from "../../../utils/services/location/location.service";
import { StorageService } from "../../../utils/storage/storage.service";
import { City } from "../../../models/city.model";
import { ToastModel } from "../../../utils/redux/app-reducers";
import { ReducerActions } from "../../../utils/redux/reducer-actions";

// validations
import * as validations from "./form-validations.json";

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

    @Input()
    public model: User = new User();
    private errorMessages: Array<string> = [];

    constructor(private elementRef: ElementRef,
        private _ValidationService: ValidationService,
        private _UserInfoService: UserInfoService,
        private _LocationService: LocationService,
        private _StorageService: StorageService,
        private _Router: Router,
        private _Store: Store<ToastModel>) { }

    public ngOnInit(): void {
    }

    public updatePersonalInfo(dialog: any) {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }
        this._UserInfoService.updateUser(this.model)
            .then((response: User) => {
                let toast: ToastModel = {
                    text: "personal information updated successfully",
                    duration: 5000,
                    type: "success"
                };
                this._Store.dispatch({type: ReducerActions.Toast.Update, payload: toast});
            }).catch((error: any) => {
                console.log(error);
            });
    }

    private userTypeChanged(value: string): void {
        this.model.userType = value === 'SHOPKEEPER' ? 'SHOPKEEPER' : 'CUSTOMER';
    }
}