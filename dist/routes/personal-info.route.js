"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const personal_info_provider_1 = require("../database/provider/database-provider/personal-info-provider");
const bson_1 = require("bson");
const validate_session_1 = require("./validate-session");
let router = express.Router();
let provider = new personal_info_provider_1.PersonalInfoProvider();
router.get('/:id', validate_session_1.authenticate, (req, res, next) => {
    provider.getPersonalInfo(new bson_1.ObjectId(req.params.id))
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
router.get('/:id/full', validate_session_1.authenticate, (req, res, next) => {
    provider.getFullPersonalInfo(new bson_1.ObjectId(req.params.id))
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
router.put('', validate_session_1.authenticate, (req, res, next) => {
    req.body._id = new bson_1.ObjectId();
    req.body._user = new bson_1.ObjectId(req.body._user);
    provider.savePersonalInfo(req.body)
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
router.post('', validate_session_1.authenticate, (req, res, next) => {
    req.body._id = new bson_1.ObjectId(req.body._id);
    req.body._user = new bson_1.ObjectId(req.body._user);
    provider.updatePersonalInfo(req.body)
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
router.delete('', validate_session_1.authenticate, (req, res, next) => {
    provider.deletePersonalInfo(new bson_1.ObjectId(req.query.id))
        .then((response) => {
        res.json(response);
    })
        .catch((err) => {
        res.json(err);
    });
});
exports.personalInfoRoutes = router;
