import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../../models/user.model";
import { UserService } from "../../services/user/user.service";
import { StorageService } from "../../../utils/storage/storage.service";

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    private user: User;
    private tabsEl: any;
    private tab: number = 0;

    constructor(private elementRef: ElementRef,
        private _UserInfoService: UserService,
        private _StorageService: StorageService,
        private _Router: Router) {
    }

    public ngOnInit(): void {
        this.user = this._StorageService.getItem('user');
        if (!this.user) {
            this._Router.navigate(['login']);
            return;
        }
        this.bindEvents();
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
}