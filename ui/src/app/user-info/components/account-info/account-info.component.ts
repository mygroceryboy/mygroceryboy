import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { ValidationService } from "../../..//utils/validation/validation.service";
import { UserInfo } from "../../../models/user-info.model";
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
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

    @Input() public model: UserInfo = new UserInfo();
    @Input() public user: User;
    private cityDropDownEl: any;
    private errorMessages: Array<string> = [];

    constructor(private elementRef: ElementRef,
        private _ValidationService: ValidationService,
        private _UserInfoService: UserInfoService,
        private _LocationService: LocationService,
        private _StorageService: StorageService,
        private _Router: Router,
        private _Store: Store<ToastModel>) { }


    public ngOnInit(): void {
        this.bindEvents();
    }

    private bindEvents(): void {
        this.cityDropDownEl = this.elementRef.nativeElement.querySelector('paper-autocomplete');
        if (!this.cityDropDownEl) {
            return;
        }
        this.cityDropDownEl.addEventListener('text-changed', this.getCities.bind(this));
        this.cityDropDownEl.addEventListener('autocomplete-selected', this.updateLocation.bind(this));
    }

    private getCities(event: any): void {
        if (!event.detail.value || event.detail.value.length < 2) {
            return;
        }
        this._LocationService.getCities(event.detail.value)
            .then((response: Array<City>) => {
                this.cityDropDownEl.source = this._LocationService.getCityDropdownList(response);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    private updateLocation(event: any): void {
        if(!event.detail.value) {
            return;
        }
        this.model.city = event.detail.value.name;
        this.model.state = event.detail.value.state;
        this.model.country = event.detail.value.country;
    }

    private updateUserInfo(dialog): void {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }

        this.model.userId = this.user.id;

        let promise: Promise<UserInfo> = this.model.id ?
            this._UserInfoService.updateUserInfo(this.model) :
            this._UserInfoService.addUserInfo(this.model);

        promise.then((response: UserInfo) => {
                let toast: ToastModel = {
                    text: "account information updated successfully",
                    duration: 5000,
                    type: "success"
                };
                this._Store.dispatch({type: ReducerActions.Toast.Update, payload: toast});
        }).catch((error: any) => {
            console.log(error);
        });
    }
}
