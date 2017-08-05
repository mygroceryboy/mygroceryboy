import { MongoError } from "mongodb";
import { disconnect, connection, connect as connectDb } from "mongoose";

export function connect(url: string = "mongodb://localhost/mygroceryboy"): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
        connectDb(url, ((err: MongoError) => {
            if (err) {
                reject(err);
            }
            connection.
                on('error', (err: any) => {
                    console.log(err);
                    return reject();
                }).
                once('open', function () {
                    return resolve();
                });
        }));
    });
}