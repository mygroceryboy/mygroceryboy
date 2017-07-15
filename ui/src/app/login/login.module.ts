import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
