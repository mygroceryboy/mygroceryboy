import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { FilterComponent } from '../views/shared/filter/filter.component';

@NgModule({
    declarations: [
        FilterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
    ],
    exports: [
        FilterComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedViewModule { }