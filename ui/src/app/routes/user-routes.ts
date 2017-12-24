import { Routes } from "@angular/router";
import { LoginComponent } from "../views/user/login/login.component";
import { RegisterComponent } from "../views/user//register/register.component";
import { UserProfileComponent } from "../views/user//user-profile/user-profile.component";
import { AuthGuard } from "../guards/auth-guard/auth-guard";

export const UserRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "user-info",
        canActivate: [AuthGuard],
        component: UserProfileComponent
    }
]