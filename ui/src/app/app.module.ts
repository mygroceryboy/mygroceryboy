import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'hammerjs';


import { LoginModule } from "./login/login.module";
import { ErrorPageModule } from "./error-page/error-page.module";
import { AppRouterModule } from "./app-router.module";
import { RegisterModule } from "./register/register.module";
import { HomeModule } from "./home/home.module";
import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HomeModule,
        ErrorPageModule,
        LoginModule,
        RegisterModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }