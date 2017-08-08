import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { ValidationService } from "./validation/validation.service";
import { StorageService } from "./storage/storage.service";
import { HttpInterceptor } from "./providers/http-interceptor.service";
import { MenuLinksDirective } from './directives/menu-links.directive';
import { AuthService } from "./providers/auth/auth.service";
import { AuthGuard } from "./guards/auth-guard";

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        ValidationService,
        StorageService,
        HttpInterceptor,
        AuthService,
        AuthGuard
    ],
    declarations: [
        MenuLinksDirective
    ],
    exports: [
        MenuLinksDirective
    ]
})
export class UtilsModule { }