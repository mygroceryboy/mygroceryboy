"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
router.get('', (req, res, next) => {
    res.json({ status: 'register route!' });
});
exports.registerRoutes = router;
