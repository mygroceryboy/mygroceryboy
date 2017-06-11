import { ObjectId } from "bson";

export interface ILoginProvider {
    getAllUser(): Promise<any>;
    getUser(id: ObjectId): Promise<any>;
    saveUser(user: any): Promise<any>;
    updateUser(user: any): Promise<any>;
    deleteUser(id: ObjectId): Promise<boolean>;
}