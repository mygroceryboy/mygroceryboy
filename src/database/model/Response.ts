export class Response<T> {

    constructor(data: T) {
        this.status = new Status();
        this.data = data;
    }

    private _data: T;
    public get data(): T {
        return this._data;
    }
    public set data(v: T) {
        this._data = v;
    }

    private _status: Status;
    public get status(): Status {
        return this._status;
    }
    public set status(v: Status) {
        this._status = v;
    }
}


class Status {

    constructor(isSuccessful: boolean = false, message: string = "") {
        this.isSuccessful = isSuccessful;
        this.message = message;
    }

    private _isSuccessful: boolean;
    public get isSuccessful(): boolean {
        return this._isSuccessful;
    }
    public set isSuccessful(v: boolean) {
        this._isSuccessful = v;
    }

    private _message: string;
    public get message(): string {
        return this._message;
    }
    public set message(v: string) {
        this._message = v;
    }

}