import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { PersonalInfo } from "../../../models/user-info.model";
import { User } from "../../../models/user.model";
import { UserInfoService } from "../../services/user-info/user-info.service";
import { StorageService } from "../../../utils/storage/storage.service";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

    public userInfo: PersonalInfo = new PersonalInfo();
    private user: User;
    private tabsEl: any;
    private tab: number = 0;

    constructor(private elementRef: ElementRef,
        private _UserInfoService: UserInfoService,
        private _StorageService: StorageService,
        private _Router: Router) {
    }

    public ngOnInit(): void {
        this.user = this._StorageService.getItem('user', false);
        if (!this.user) {
            this._Router.navigate(['login']);
            return;
        }
        this.bindEvents();
        this.getUserInfo();
    }

    private bindEvents(): void {
        this.tabsEl = this.elementRef.nativeElement.querySelector('paper-tabs');
        if (this.tabsEl) {
            this.tabsEl.addEventListener('selected-changed', this.onTabChanged.bind(this));
        }
    }

    private onTabChanged(event: any): void {
        this.tab = event.detail.value;
    }

    private getUserInfo(): void {
        this._UserInfoService
            .getUserInfo(this.user.id)
            .then((response: PersonalInfo) => {
                this.userInfo = response || this.userInfo;
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}