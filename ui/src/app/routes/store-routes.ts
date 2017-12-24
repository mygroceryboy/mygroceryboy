import { Route } from "@angular/router";
import { StoreListComponent } from "../views/store/store-list/store-list.component";
import { StoreUpdateComponent } from "../views/store/store-update/store-update.component";
import { StoreCreateComponent } from "../views/store/store-create/store-create.component";
import { AuthGuard } from "../guards/auth-guard/auth-guard";
import { GroceryRoute } from "./grocery-routes";

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
            path: "list/filter/:query",
            canActivate: [AuthGuard],
            component: StoreListComponent
        },
        {
            path: "new",
            canActivate: [AuthGuard],
            component: StoreCreateComponent
        },
        {
            path: ":storeId",
            children: [{
                path: "",
                canActivate: [AuthGuard],
                component: StoreUpdateComponent,
            }, GroceryRoute]
        }
    ]
};