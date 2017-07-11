import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
