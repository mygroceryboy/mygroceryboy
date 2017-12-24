import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { UtilsModule } from "./utils.module";

import { StoreListComponent } from "../views/store/store-list/store-list.component";
import { StoreCreateComponent } from "../views/store/store-create/store-create.component";
import { StoreUpdateComponent } from "../views/store/store-update/store-update.component";
import { StoreItemComponent } from "../views/store/store-item/store-item.component";
import { StoreService } from "../controllers/store/store.service";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        UtilsModule,
        RouterModule
    ],
    declarations: [
        StoreListComponent
        ,
        StoreCreateComponent,
        StoreUpdateComponent,
        StoreItemComponent
    ],
    providers: [StoreService],
    exports: [
        StoreListComponent,
        StoreCreateComponent,
        StoreUpdateComponent,
        StoreItemComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreModule { }
