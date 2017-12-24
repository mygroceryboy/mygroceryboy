import { Directive, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { MenuLink } from "../../redux/app-reducers";
import { ReducerActions } from "../../redux/reducer-actions";
import { MenuLinksConfig } from "./menu-links-config";

@Directive({
    selector: '[menu-links]'
})
export class MenuLinksDirective implements OnInit, OnChanges {

    @Input()
    linkGroup: string;
    @Input()
    overrides: any;

    constructor(private _Store: Store<MenuLink>) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.overrides && changes.overrides.currentValue) {
            this.updateLinks(changes.overrides.currentValue);
        }
    }

    ngOnInit(): void {
        this.loadLinks();
    }

    private updateLinks(newLinks: Array<MenuLink>) {
        if (!newLinks || !this.linkGroup || !MenuLinksConfig[this.linkGroup]) {
            return;
        }
        newLinks.forEach((newLink: MenuLink) => {
            let index = MenuLinksConfig[this.linkGroup].findIndex((link: MenuLink) => {
                return newLink.label === link.label;
            });
            if (index > -1) {
                MenuLinksConfig[this.linkGroup][index].label = newLink.label;
                MenuLinksConfig[this.linkGroup][index].path = newLink.path;
            }
        });

        this.loadLinks();
    }

    private loadLinks() {
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