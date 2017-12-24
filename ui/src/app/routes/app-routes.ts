import { Routes } from "@angular/router";
import { HomeComponent } from "../views/home/home.component";
import { ContactUsComponent } from "../views/contact-us/contact-us.component";
import { AboutUsComponent } from "../views/about-us/about-us.component";
import { ErrorPageComponent } from "../views/error-page/error-page.component";
import { StoreRoute } from "./store-routes";
import { AuthGuard } from "../guards/auth-guard/auth-guard";
import { UserRoutes } from "app/routes/user-routes";

export const AppRoutes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "about-us",
        component: AboutUsComponent
    },
    {
        path: "contact-us",
        component: ContactUsComponent
    },
    ...UserRoutes,
    StoreRoute,
    //this route is always registered in the end
    {
        path: "**",
        component: ErrorPageComponent
    }
];