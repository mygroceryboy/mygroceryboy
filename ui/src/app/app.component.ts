import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs/Subscription";
import { ToastModel, MenuLink } from "./redux/app-reducers";
import { AuthService } from "./services/auth/auth.service";
import { User } from "./models/user.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    private toastModel: ToastModel = new ToastModel();
    private user: User;
    private isActive: boolean = false;
    private links: MenuLink[] = [];
    private toastSubscription: Subscription;
    private loaderSubscription: Subscription;
    private menuLinksSubscription: Subscription;

    constructor(private _Router: Router,
        private _Store: Store<any>,
        private _AuthService: AuthService) {
    }

    public ngOnInit(): void {
        this.user = this._AuthService.user;
        this.toastSubscription = this._Store.select('Toast').subscribe((toast: ToastModel) => {
            if (!toast) {
                return;
            }
            this.toastModel = toast;
            this.setToastTimeout();
        });
        this.loaderSubscription = this._Store.select('Loader').subscribe((isLoaderActive: boolean) => {
            if (isLoaderActive === undefined || isLoaderActive === null) {
                return;
            }
            this.isActive = isLoaderActive;
        });
        this.menuLinksSubscription = this._Store.select('MenuLinks').subscribe((links: MenuLink[]) => {
            if (!links) {
                return;
            }
            this.links = links;
        });
    }

    public ngOnDestroy(): void {
        this.toastSubscription.unsubscribe();
        this.loaderSubscription.unsubscribe();
        this.menuLinksSubscription.unsubscribe();
    }

    private setToastTimeout(): void {
        if (this.toastModel.duration) {
            let self = this;
            setTimeout(() => self.toastModel.text = "", this.toastModel.duration);
        }
    }

    private hideToast() {
        this.toastModel.text = "";
    }

    private redirect(menu: any, path: string): void {
        if (menu) {
            menu.close();
        }
        this._Router.navigate([path]);
    }

    public logout() {
        this._AuthService.clearSession();
        this._Router.navigate(['login']);
    }
}