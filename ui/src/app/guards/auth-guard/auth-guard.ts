import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _AuthService: AuthService,
        private _Router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this._AuthService.isLoggedIn()) {
            return true;
        }
        this._Router.navigate(['login']);
        return false;
    }
}