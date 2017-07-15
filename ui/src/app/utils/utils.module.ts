import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationService } from "./validation/validation.service";
import { StorageService } from "./storage/storage.service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [ValidationService, StorageService]
})
export class UtilsModule { }
