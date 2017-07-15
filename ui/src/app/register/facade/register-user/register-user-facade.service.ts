import { Injectable } from '@angular/core';
import { RegisterUserService } from "../../services/register-user/register-user.service";

@Injectable()
export class RegisterUserFacadeService {

  constructor(private _RegisterUserService: RegisterUserService) { }

}
