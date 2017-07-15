import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from "@angular/router";
import { UtilsModule } from "../utils/utils.module";
import { RegisterUserService } from "./services/register-user/register-user.service";
import { RegisterUserFacadeService } from "./facade/register-user/register-user-facade.service";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        UtilsModule,
        RouterModule
    ],
    providers: [RegisterUserService, RegisterUserFacadeService],
    declarations: [RegisterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }