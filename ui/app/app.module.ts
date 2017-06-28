import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginModule } from "./login/login.module";
import { ErrorPageModule } from "./error-page/error-page.module";
import { AppRouterModule } from "./app-router.module";
import { RegisterModule } from "./register/register.module";
import { HomeModule } from "./home/home.module";

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
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }