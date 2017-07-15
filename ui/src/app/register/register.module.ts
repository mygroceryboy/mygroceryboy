import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from "@angular/router";
import { UtilsModule } from "../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        UtilsModule,
        RouterModule
    ],
    declarations: [RegisterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }