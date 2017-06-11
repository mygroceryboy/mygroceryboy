import * as mongoose from "mongoose";
import { MongoError } from "mongodb";

export class DbInitializer {

    public url: string = "mongodb://localhost:27017/mygroceryboy";

    public connect(): Promise<any> {
        return new Promise((resolve, reject) => {
            mongoose.connect(this.url);
            var db = mongoose.connection;
            db.on('error', () => {
                console.log("arguments for db error");
                console.log(arguments);
                return reject();
            });
            db.once('open', function () {
                console.log("arguments for db success");
                console.log(arguments);
                return resolve();
            });
        });
    }
}