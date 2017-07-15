import { Component, OnInit, Input } from '@angular/core';
import { ValidationService } from "../utils/validation/validation.service";
import { Register } from "../models/register.model";

// validations
import * as validations from "./form-validations.json";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @Input()
    public model: Register = new Register();
    
    private errorMessages: Array<string> = [];

    constructor(private _ValidationService: ValidationService) {
    }

    public ngOnInit(): void {
    }

    private register(dialog): void {
        this._ValidationService.validate(this.model, validations)
        this.errorMessages = this._ValidationService.errorMessages;
        console.log(this.errorMessages);
        dialog.open();
    }
}