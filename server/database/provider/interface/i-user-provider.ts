import { ObjectId } from "bson";

export interface IUserProvider {
    getAllUsers(): Promise<any>;
    getUser(id: ObjectId): Promise<any>;
    saveUser(user: any): Promise<any>;
    updateUser(user: any): Promise<any>;
    deleteUser(id: ObjectId): Promise<boolean>;
}