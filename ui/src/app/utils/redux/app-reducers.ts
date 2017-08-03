import { ActionReducer, Action } from '@ngrx/store';
import { ReducerActions } from "./reducer-actions";
import { Status } from "../../models/base/response.model";

export class ToastModel {
    public text: string;
    public type: Status;
    public duration: number;
}

export function ToastReducer(state: ToastModel, action: Action): ActionReducer<ToastModel> {
    switch (action.type) {
        case ReducerActions.Toast.Update:
            return action.payload;
    }
}