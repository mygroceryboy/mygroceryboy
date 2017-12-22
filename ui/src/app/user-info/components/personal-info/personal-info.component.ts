import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ValidationService } from "../../..//utils/validation/validation.service";
import { PersonalInfo } from "../../../models/personal-info.model";
import { User } from "../../../models/user.model";
import { UserService } from "../../services/user/user.service";
import { StorageService } from "../../../utils/storage/storage.service";
import { City } from "../../../models/city.model";

// validations
import * as validations from "./form-validations.json";

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

    @Input() public model: User;
    private cityDropDownEl: any;
    private errorMessages: Array<string> = [];

    constructor(private elementRef: ElementRef,
        private _ValidationService: ValidationService,
        private _UserInfoService: UserService,
        private _StorageService: StorageService,
        private _Router: Router) { }


    public ngOnInit(): void {
        if (!this.model.personalInfo) {
            this.model.personalInfo = new PersonalInfo();
        }
        this.bindEvents();
    }

    private bindEvents(): void {
        // this.cityDropDownEl = this.elementRef.nativeElement.querySelector('paper-autocomplete');
        // if (!this.cityDropDownEl) {
        //     return;
        // }
        // this.cityDropDownEl.addEventListener('text-changed', this.getCities.bind(this));
        // this.cityDropDownEl.addEventListener('autocomplete-selected', this.updateLocation.bind(this));
    }

    private updateLocation(event: any): void {
        if (!event.detail.value) {
            return;
        }
        this.model.personalInfo.city = event.detail.value.name;
        this.model.personalInfo.state = event.detail.value.state;
        this.model.personalInfo.country = event.detail.value.country;
    }

    private updateUserInfo(dialog): void {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }

        this._UserInfoService.updateUser(this.model).catch((error: any) => {
            console.log(error);
        });
    }
}   