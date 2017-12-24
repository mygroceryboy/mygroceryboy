import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { UtilsModule } from './modules/utils.module';
import { UserModule } from "./modules/user.module";
import { StoreModule as ShopModule } from "./modules/store.module"
import { GroceryModule } from "./modules/grocery.module"

import { AppComponent } from './app.component';
import { HomeComponent } from "app/views/home/home.component";
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ErrorPageComponent } from "app/views/error-page/error-page.component";

import { LocationService } from "./controllers/location/location.service";
import { NgrxStoreProviders } from "./redux/ngrx-store.providers";
import { AppRoutes } from "./routes/app-routes";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorPageComponent,
        AboutUsComponent,
        ContactUsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        UserModule,
        ShopModule,
        GroceryModule,
        UtilsModule,
        StoreModule.provideStore(NgrxStoreProviders),
        //RouterModule always in the end
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [
        AppComponent,
        HomeComponent,
        ErrorPageComponent,
        AboutUsComponent,
        ContactUsComponent
    ],
    providers: [LocationService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }