import { ActionReducer, Action } from '@ngrx/store';
import { ReducerActions } from "./reducer-actions";
import { Status } from "../../models/base/response.model";

export class ToastModel {
    public text: string;
    public type: Status;
    public duration: number;
}

export class MenuLink {
    public path: string;
    public label: string;
}

export function ToastReducer(state: ToastModel, action: Action): ActionReducer<ToastModel> {
    switch (action.type) {
        case ReducerActions.Toast.Update:
            return action.payload;
    }
}

export function LoaderReducer(state: boolean = false, action: Action): ActionReducer<boolean> {
    switch (action.type) {
        case ReducerActions.Loader.Set:
            return action.payload;
    }
}

export function MenuLinksReducer(state: MenuLink[], action: Action): ActionReducer<MenuLink[]> {
    switch (action.type) {
        case ReducerActions.Links.Set:
            return action.payload.slice();
    }
}