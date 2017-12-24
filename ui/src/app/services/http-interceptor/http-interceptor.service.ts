import { Injectable } from "@angular/core";
import { XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Rx";
import { Observer } from "rxjs/Observer";
import { Response as ApiResponse } from "../../models/base/response.model";
import { ToastModel } from "../../redux/app-reducers";
import { ReducerActions } from "../../redux/reducer-actions";

@Injectable()
export class HttpInterceptor extends Http {
    constructor(private _XHRBackend: XHRBackend,
        private _RequestOptions: RequestOptions,
        private _ToastStore: Store<ToastModel>,
        private _LoaderStore: Store<boolean>) {
        super(_XHRBackend, _RequestOptions);
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.handleResponse(super.request(url, options));
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.beforeRequest(url);
        return super.get(url, this.getRequestOptionArgs(options));
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        this.beforeRequest(url, body);
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        this.beforeRequest(url, body);
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.beforeRequest(url);
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }

    private handleResponse(response: Observable<Response>): Observable<Response> {
        return response
            .catch(this.onCatch)
            .do(this.onSuccess.bind(this), this.onError.bind(this))
            .finally(this.afterResponse.bind(this));
    }

    private beforeRequest(url: string, body?: string): void {
        this._LoaderStore.dispatch({ type: ReducerActions.Loader.Set, payload: true });
    }

    private afterResponse(): void {
        this._LoaderStore.dispatch({ type: ReducerActions.Loader.Set, payload: false });
    }

    private onCatch(error: any, caught: Observable<Response>): Observable<Response> {
        console.log("interceptor catch called");
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        let response: ApiResponse<any> = res.json();
        if (!response.message) {
            return;
        }
        let toast: ToastModel = {
            text: response.message,
            duration: 5000,
            type: "success"
        };
        this._ToastStore.dispatch({ type: ReducerActions.Toast.Update, payload: toast });
    }

    private onError(error: any): void {
        let toast: ToastModel = {
            text: "Error occurred!",
            duration: 5000,
            type: "failure"
        };
        this._ToastStore.dispatch({ type: ReducerActions.Toast.Update, payload: toast });
    }
}