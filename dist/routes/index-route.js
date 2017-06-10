"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
router.get('**', (req, res, next) => {
    console.log(__dirname);
    res.sendFile("index.html", { root: "./dist/public/dist" });
});
exports.indexRoute = router;
