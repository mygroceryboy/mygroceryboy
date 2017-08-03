import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs/Subscription";
import { ToastModel } from "./utils/redux/app-reducers";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    private toastModel: ToastModel = new ToastModel();
    private toastSubscription: Subscription;

    constructor(private router: Router, private _Store: Store<ToastModel>) {
    }

    public ngOnInit(): void {
        this.toastSubscription = this._Store.select('Toast').subscribe((toast: ToastModel) => {
            this.toastModel = toast || this.toastModel;
            setTimeout(function () {
                this.toastModel.text = "";
            }.bind(this), this.toastModel.duration);
        });
    }

    public ngOnDestroy(): void {
        this.toastSubscription.unsubscribe();
    }

    private hideToast() {
        this.toastModel.text = "";
    }

    private redirect(menu: any, path: string): void {
        menu.close();
        this.router.navigate([path]);
    }
}