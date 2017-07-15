import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class RegisterUserService {

  constructor(private _Http: Http) { }
}
