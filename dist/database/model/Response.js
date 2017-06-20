"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(data) {
        this.Status = new Status();
        this.Data = data;
    }
    get Data() {
        return this.data;
    }
    set Data(v) {
        this.data = v;
    }
    get Status() {
        return this.status;
    }
    set Status(v) {
        this.status = v;
    }
}
exports.Response = Response;
class Status {
    constructor(isSuccessful = false, message = "") {
        this.IsSuccessful = isSuccessful;
        this.Message = message;
    }
    get IsSuccessful() {
        return this.isSuccessful;
    }
    set IsSuccessful(v) {
        this.isSuccessful = v;
    }
    get Message() {
        return this.message;
    }
    set Message(v) {
        this.message = v;
    }
}
exports.Status = Status;
