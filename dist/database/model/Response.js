"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(data) {
        this.status = new Status();
        this.data = data;
    }
    get data() {
        return this._data;
    }
    set data(v) {
        this._data = v;
    }
    get status() {
        return this._status;
    }
    set status(v) {
        this._status = v;
    }
}
exports.Response = Response;
class Status {
    constructor(isSuccessful = false, message = "") {
        this.isSuccessful = isSuccessful;
        this.message = message;
    }
    get isSuccessful() {
        return this._isSuccessful;
    }
    set isSuccessful(v) {
        this._isSuccessful = v;
    }
    get message() {
        return this._message;
    }
    set message(v) {
        this._message = v;
    }
}
