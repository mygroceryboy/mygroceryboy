"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const login_provider_1 = require("../database/provider/database-provider/login-provider");
let router = express.Router();
let provider = new login_provider_1.LoginProvider();
router.post('', (req, res, next) => {
    provider.login(req.body).then(response => {
        req.session.user = req.body;
        req.session.save(err => {
            if (err) {
                response.status.isSuccessful = false;
                response.status.message = "falied to store user information in session!";
                response.data = null;
                res.json(response);
            }
            res.json(response);
        });
    }).catch(err => {
        res.json(err);
    });
});
exports.loginRoutes = router;
