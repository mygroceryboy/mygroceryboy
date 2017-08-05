export class Page<T> {
    rows: T;
    count: number;
    page: number;
    size: number;
}

export class Response<T> {
    data: T;
    isSuccessful: boolean;
    message: string;

    constructor() {
        this.isSuccessful = false;
    }
}

export type Status = "success" | "info" | "warning" | "failure";