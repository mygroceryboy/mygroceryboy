export class Response<T> {

    constructor(data: T) {
        this.Status = new Status();
        this.Data = data;
    }

    private data: T;
    public get Data(): T {
        return this.data;
    }
    public set Data(v: T) {
        this.data = v;
    }

    private status: Status;
    public get Status(): Status {
        return this.status;
    }
    public set Status(v: Status) {
        this.status = v;
    }
}


export class Status {

    constructor(isSuccessful: boolean = false, message: string = "") {
        this.IsSuccessful = isSuccessful;
        this.Message = message;
    }

    private isSuccessful: boolean;
    public get IsSuccessful(): boolean {
        return this.isSuccessful;
    }
    public set IsSuccessful(v: boolean) {
        this.isSuccessful = v;
    }

    private message: string;
    public get Message(): string {
        return this.message;
    }
    public set Message(v: string) {
        this.message = v;
    }

}