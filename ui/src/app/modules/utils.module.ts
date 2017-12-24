import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { ValidationService } from "../services/validation/validation.service";
import { StorageService } from "../services/storage/storage.service";
import { HttpInterceptor } from "../services/http-interceptor/http-interceptor.service";
import { MenuLinksDirective } from '../directives/menu-links/menu-links.directive';
import { AuthService } from "../services/auth/auth.service";
import { AuthGuard } from "../guards/auth-guard/auth-guard";

import { NgrxStoreProviders } from "../redux/ngrx-store.providers";
import { ToastReducer } from "../redux/app-reducers";

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