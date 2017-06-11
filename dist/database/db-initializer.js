"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DbInitializer {
    constructor() {
        this.url = "mongodb://localhost:27017/mygroceryboy";
    }
    connect() {
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
exports.DbInitializer = DbInitializer;
