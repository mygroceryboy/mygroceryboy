import { ObjectId } from "bson";
import { Response } from "../../model/Response";

export interface IRegisterProvider {
    register(user:any): Promise<Response<any>>;
}