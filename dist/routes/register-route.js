"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const register_provider_1 = require("../database/provider/database-provider/register-provider");
const bson_1 = require("bson");
let router = express.Router();
let provider = new register_provider_1.RegisterProvider();
router.post('', (req, res, next) => {
    req.body._id = new bson_1.ObjectId();
    provider.register(req.body).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    });
});
exports.registerRoutes = router;
