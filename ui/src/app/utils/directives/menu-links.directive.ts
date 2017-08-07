import { Directive, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { MenuLink } from "../redux/app-reducers";
import { ReducerActions } from "../redux/reducer-actions";
import { MenuLinksConfig } from "./menu-links-config";

@Directive({
    selector: '[menu-links]'
})
export class MenuLinksDirective implements OnInit {

    @Input()
    linkGroup: string;

    constructor(private _Store: Store<MenuLink>) {
    }

    ngOnInit(): void {
        setTimeout(function () {
            if (this.linkGroup) {
                this._Store.dispatch({
                    type: ReducerActions.Links.Set,
                    payload: MenuLinksConfig[this.linkGroup]
                });
            }
        }.bind(this));
    }
}