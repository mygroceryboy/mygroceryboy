"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const login_provider_1 = require("../database/provider/database-provider/login-provider");
const bson_1 = require("bson");
let router = express.Router();
let provider = new login_provider_1.LoginProvider();
router.get('', (req, res, next) => {
    provider.getAllUsers()
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
router.get('/:id', (req, res, next) => {
    provider.getUser(new bson_1.ObjectId(req.params.id))
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
router.post('', (req, res, next) => {
    req.body._id = new bson_1.ObjectId();
    provider.saveUser(req.body)
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
router.put('', (req, res, next) => {
    req.body._id = new bson_1.ObjectId(req.body._id);
    provider.updateUser(req.body)
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
router.delete('', (req, res, next) => {
    console.log(req.query.id);
    provider.deleteUser(new bson_1.ObjectId(req.query.id))
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
exports.loginRoutes = router;
