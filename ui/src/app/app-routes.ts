import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoginComponent } from "./login/components/login/login.component";
import { RegisterComponent } from "./register/components/register/register.component";
import { UserInfoComponent } from "./user-info/components/user-info/user-info.component";
import { StoreRoute } from "./store/store-routes";

export const AppRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "user-info", component: UserInfoComponent },
    StoreRoute,
    //this route is always registered in the end
    { path: "**", component: ErrorPageComponent }
];
