import { Component, OnInit, Input } from '@angular/core';
import { ValidationService } from "../../..//utils/validation/validation.service";
import { User } from "../../../models/user.model";
import { RegisterUserService } from "../../services/register-user/register-user.service";

// validations
import * as validations from "../../form-validations.json";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @Input("model")
    public user: User = new User();
    
    private errorMessages: Array<string> = [];

    constructor(private _ValidationService: ValidationService,
        private _RegisterUserService: RegisterUserService) {
    }

    public ngOnInit(): void {
    }

    private register(dialog): void {
        if (this._ValidationService.validate(this.user, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
        }
        this._RegisterUserService.register(this.user);
    }
}