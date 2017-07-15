import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationService } from "./validation/validation.service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [ValidationService]
})
export class UtilsModule { }
