import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { UtilsModule } from "../utils/utils.module";
import { StoreCreateComponent } from './components/store-create/store-create.component';
import { StoreUpdateComponent } from './components/store-update/store-update.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StoreService } from "./services/store/store.service";
import { StoreItemComponent } from './components/store-item/store-item.component';

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
        StoreCreateComponent,
        StoreUpdateComponent,
        StoreListComponent,
        StoreItemComponent
    ],
    providers: [StoreService],
    exports: [
        StoreCreateComponent,
        StoreUpdateComponent,
        StoreListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreModule { }
