import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from "../utils/utils.module";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from "app/user-info/services/user/user.service";
import { UserInfoComponent } from 'app/user-info/components/user-info/user-info.component';
import { PersonalInfoComponent } from 'app/user-info/components/personal-info/personal-info.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        UtilsModule,
        RouterModule
    ],
    providers: [UserService],
    declarations: [
        UserInfoComponent,
        PersonalInfoComponent,
        UserProfileComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserInfoModule { }