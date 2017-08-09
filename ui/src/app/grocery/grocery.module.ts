import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { UtilsModule } from "../utils/utils.module";
import { GroceryCreateComponent } from './components/grocery-create/grocery-create.component';
import { GroceryUpdateComponent } from './components/grocery-update/grocery-update.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryService } from "./services/grocery/grocery.service";

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
        GroceryCreateComponent,
        GroceryUpdateComponent,
        GroceryListComponent
    ],
    providers: [GroceryService],
    exports: [
        GroceryCreateComponent,
        GroceryUpdateComponent,
        GroceryListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroceryModule { }
