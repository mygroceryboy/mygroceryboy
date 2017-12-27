import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { FilterComponent } from '../views/shared/filter/filter.component';
import { PaginationComponent } from '../views/shared/pagination/pagination.component';

@NgModule({
    declarations: [
        FilterComponent,
        PaginationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        FilterComponent,
        PaginationComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedViewModule { }