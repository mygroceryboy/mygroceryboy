import { Route } from "@angular/router";
import { StoreListComponent } from "./components/store-list/store-list.component";
import { StoreUpdateComponent } from "./components/store-update/store-update.component";
import { StoreCreateComponent } from "./components/store-create/store-create.component";
import { AuthGuard } from "../utils/guards/auth-guard";
import { GroceryRoute } from "../grocery/grocery-routes";

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