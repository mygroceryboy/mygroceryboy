import { ToastReducer, LoaderReducer, MenuLinksReducer } from "./app-reducers";

export const NgrxStoreProviders = {
    Toast: ToastReducer,
    Loader: LoaderReducer,
    MenuLinks: MenuLinksReducer
};