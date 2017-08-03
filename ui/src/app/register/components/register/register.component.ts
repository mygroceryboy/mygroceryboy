import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { ValidationService } from "../../..//utils/validation/validation.service";
import { User } from "../../../models/user.model";
import { RegisterUserService } from "../../services/register-user/register-user.service";
import { ToastModel } from "../../../utils/redux/app-reducers";
import { ReducerActions } from "../../../utils/redux/reducer-actions";

// validations
import * as validations from "../../form-validations.json";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @Input("model")
    public model: User = new User();
    
    private errorMessages: Array<string> = [];

    constructor(private _ValidationService: ValidationService,
        private _RegisterUserService: RegisterUserService,
        private _Router: Router,
        private _Store: Store<ToastModel>) {
    }

    public ngOnInit(): void {
    }

    private register(dialog): void {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }
        if (!this.model.username) {
            this.model.username = this.model.email;
        }
        this._RegisterUserService
            .register(this.model)
            .then((response: User) => {
                let toast: ToastModel = {
                    text: "registration successful!",
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