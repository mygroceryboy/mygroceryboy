import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UtilsModule } from "./utils.module";

import { LoginComponent } from "../views/user/login/login.component";
import { RegisterComponent } from "../views/user/register/register.component";
import { UserProfileComponent } from "../views/user/user-profile/user-profile.component";
import { UserInfoComponent } from "../views/user/user-info/user-info.component";
import { PersonalInfoComponent } from "../views/user/personal-info/personal-info.component";

import { UserService } from "app/controllers/user/user.service";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        UtilsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        UserProfileComponent,
        UserInfoComponent,
        PersonalInfoComponent
    ],
    providers: [UserService],
    exports: [
        LoginComponent,
        RegisterComponent,
        UserProfileComponent,
        UserInfoComponent,
        PersonalInfoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }