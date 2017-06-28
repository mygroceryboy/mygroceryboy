import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
