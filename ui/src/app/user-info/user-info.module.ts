import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from "../utils/utils.module";
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserInfoService } from "app/user-info/services/user-info/user-info.service";

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
    declarations: [UserInfoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserInfoModule { }
