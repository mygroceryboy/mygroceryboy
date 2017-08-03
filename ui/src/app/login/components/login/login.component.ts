import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { ValidationService } from "../../..//utils/validation/validation.service";
import { User } from "../../../models/user.model";
import { LoginUserService } from "../../services/login-user/login-user.service";
import { ToastModel } from "../../../utils/redux/app-reducers";
import { ReducerActions } from "../../../utils/redux/reducer-actions";

// validations
import * as validations from "../../form-validations.json";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Input("model")
    public model: User = new User();
    
    private errorMessages: Array<string> = [];

    constructor(private _ValidationService: ValidationService,
        private _LoginUserService: LoginUserService,
        private _Router: Router,
        private _Store: Store<ToastModel>) {
    }

    public ngOnInit(): void {
    }

    private login(dialog): void {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }
        this._LoginUserService
            .login(this.model)
            .then((response: User) => {
                let text: string = "Successfully logged in as " + response.name;
                let toast: ToastModel = {
                    text: text,
                    duration: 5000,
                    type: "success"
                };
                this._Store.dispatch({type: ReducerActions.Toast.Update, payload: toast});
                this._Router.navigate(['home']);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}