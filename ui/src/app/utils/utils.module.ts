import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { ValidationService } from "./validation/validation.service";
import { StorageService } from "./storage/storage.service";
import { HttpInterceptor } from "./providers/http-interceptor.service";
import { MenuLinksDirective } from './directives/menu-links.directive';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [ValidationService, StorageService, HttpInterceptor],
    declarations: [
        MenuLinksDirective
    ],
    exports: [
        MenuLinksDirective
    ]
})
export class UtilsModule { }
