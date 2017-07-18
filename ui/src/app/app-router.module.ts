import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoginComponent } from "./login/components/login/login.component";
import { RegisterComponent } from "./register/components/register/register.component";
import { UserInfoComponent } from "./user-info/components/user-info/user-info.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch:"full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "user-info", component: UserInfoComponent },
    //this route is always registered in the end
    { path: "**", component: ErrorPageComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: []
})
export class AppRouterModule { }
