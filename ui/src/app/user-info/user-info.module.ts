import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from "../utils/utils.module";
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserInfoService } from "app/user-info/services/user-info/user-info.service";
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        UtilsModule,
        RouterModule
    ],
    providers: [UserInfoService],
    declarations: [
        UserInfoComponent,
        AccountInfoComponent,
        PersonalInfoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserInfoModule { }