import { Route } from "@angular/router";
import { GroceryListComponent } from "../views/grocery/grocery-list/grocery-list.component";
import { GroceryUpdateComponent } from "../views/grocery/grocery-update/grocery-update.component";
import { GroceryCreateComponent } from "../views/grocery/grocery-create/grocery-create.component";
import { AuthGuard } from "../guards/auth-guard/auth-guard";

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