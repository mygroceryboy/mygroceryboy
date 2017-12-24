import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { UtilsModule } from "./utils.module";

import { GroceryListComponent } from "../views/grocery/grocery-list/grocery-list.component";
import { GroceryCreateComponent } from "../views/grocery/grocery-create/grocery-create.component";
import { GroceryUpdateComponent } from "../views/grocery/grocery-update/grocery-update.component";
import { GroceryService } from "../controllers/grocery/grocery.service";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        UtilsModule,
    ],
    declarations: [
        GroceryListComponent,
        GroceryCreateComponent,
        GroceryUpdateComponent
    ],
    providers: [GroceryService],
    exports: [
        GroceryListComponent,
        GroceryCreateComponent,
        GroceryUpdateComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroceryModule { }
