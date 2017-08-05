import { Route } from "@angular/router";
import { StoreListComponent } from "./components/store-list/store-list.component";
import { StoreUpdateComponent } from "./components/store-update/store-update.component";
import { StoreCreateComponent } from "./components/store-create/store-create.component";

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
            component: StoreListComponent
        },
        {
            path: "list/:storeId",
            component: StoreUpdateComponent
        },
        {
            path: "list/filter/:query",
            component: StoreListComponent
        },
        {
            path: "new",
            component: StoreCreateComponent
        },
    ]
};