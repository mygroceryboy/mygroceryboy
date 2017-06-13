import { ObjectId } from "bson";
import { Response } from "../../model/Response";

export interface ILoginProvider {
    login(user:any): Promise<Response<any>>;
}