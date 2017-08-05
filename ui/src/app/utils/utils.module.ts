import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { ValidationService } from "./validation/validation.service";
import { StorageService } from "./storage/storage.service";
import { HttpInterceptor } from "./providers/http-interceptor.service";

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [ValidationService, StorageService, HttpInterceptor]
})
export class UtilsModule { }
