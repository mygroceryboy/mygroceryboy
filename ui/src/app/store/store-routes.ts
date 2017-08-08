import { Route } from "@angular/router";
import { StoreListComponent } from "./components/store-list/store-list.component";
import { StoreUpdateComponent } from "./components/store-update/store-update.component";
import { StoreCreateComponent } from "./components/store-create/store-create.component";
import { AuthGuard } from "../utils/guards/auth-guard";

export const StoreRoute: Route = {
    path: "store",
    children: [
        {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
        },
        {
            path: "list",
            canActivate: [AuthGuard],
            component: StoreListComponent
        },
        {
            path: "list/:storeId",
            canActivate: [AuthGuard],
            component: StoreUpdateComponent
        },
        {
            path: "list/filter/:query",
            canActivate: [AuthGuard],
            component: StoreListComponent
        },
        {
            path: "new",
            canActivate: [AuthGuard],
            component: StoreCreateComponent
        },
    ]
};