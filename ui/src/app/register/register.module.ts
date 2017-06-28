import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [RegisterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }
