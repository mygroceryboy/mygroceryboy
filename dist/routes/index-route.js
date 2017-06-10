"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
router.get('**', (request, response, next) => {
    response.sendFile("index.html", { root: "./dist/public/dist" });
});
exports.indexRoute = router;
