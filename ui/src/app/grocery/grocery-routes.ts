import { Route } from "@angular/router";
import { GroceryListComponent } from "./components/grocery-list/grocery-list.component";
import { GroceryUpdateComponent } from "./components/grocery-update/grocery-update.component";
import { GroceryCreateComponent } from "./components/grocery-create/grocery-create.component";
import { AuthGuard } from "../utils/guards/auth-guard";

export const GroceryRoute: Route = {
    path: "grocery",
    children: [
        {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
        },
        {
            path: "list",
            canActivate: [AuthGuard],
            component: GroceryListComponent
        },
        {
            path: "list/filter/:query",
            canActivate: [AuthGuard],
            component: GroceryListComponent
        },
        {
            path: "new",
            canActivate: [AuthGuard],
            component: GroceryCreateComponent
        },
        {
            path: ":groceryId",
            canActivate: [AuthGuard],
            component: GroceryUpdateComponent
        }
    ]
};