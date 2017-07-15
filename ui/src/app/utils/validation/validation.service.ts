import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

    private _errorMessages: Array<string> = [];
    public get errorMessages(): Array<string> {
        return this._errorMessages;
    }

    constructor() { }

    public validate(model: any, validations: any): boolean {
        //initialize
        this._errorMessages = [];

        if (!model || !validations) {
            return false;
        }

        let modelProperties: Array<string> = Object.keys(model);

        if (!modelProperties || !modelProperties.length) {
            return false;
        }

        modelProperties.forEach((property: string) => {
            this.validateProperty(model[property], validations[property]);
        });

        return this._errorMessages.length === 0;
    }

    private validateProperty(model: string, validations: any): void {

        if (!validations) {
            return;
        }

        let validationsKeys: Array<string> = Object.keys(validations);

        if (!validationsKeys || !validationsKeys.length) {
            return;
        }

        validationsKeys.forEach((key: string) => {
            switch (key.toLowerCase()) {

                case "required":
                    this.required(model, validations[key].message);
                    break;

                case "min":
                    this.minLength(model, validations[key].key, validations[key].message);
                    break;

                case "max":
                    this.maxLength(model, validations[key].key, validations[key].message);
                    break;

                case "pattern":
                    this.pattern(model, validations[key].key, validations[key].message);
                    break;

                case "compare":
                    this.compare(model, validations[key].key, validations[key].message);
                    break;

                default:
                    break;
            }
        });
    }

    private required(model: string, message: string): void {
        if (!message || !message.length) {
            return;
        }

        if (!model || !model.length) {
            this._errorMessages.push(message);
        }
    }

    private minLength(model: string, length: string, message: string): void {
        let modelLength = parseInt(length);

        if (!message || !message.length || !modelLength) {
            return;
        }

        if (message.length < modelLength) {
            this._errorMessages.push(message);
        }
    }

    private maxLength(model: string, length: string, message: string): void {
        let modelLength = parseInt(length);

        if (!message || !message.length || !modelLength) {
            return;
        }

        if (message.length > modelLength) {
            this._errorMessages.push(message);
        }
    }

    private pattern(model: string, pattern: string, message: string): void {
        if (!message || !message.length || !pattern) {
            return;
        }

        let regex = new RegExp(pattern);

        if (!regex.test(model)) {
            this._errorMessages.push(message);
        }
    }

    private compare(model1: string, model2: string, message: string): void {
        if (!message || !message.length) {
            return;
        }

        if (model1 !== model2) {
            this._errorMessages.push(message);
        }
    }
}
