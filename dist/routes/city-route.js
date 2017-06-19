"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const city_provider_1 = require("../database/provider/database-provider/city-provider");
let router = express.Router();
let provider = new city_provider_1.CityProvider();
// router.post('', authenticate, (req: Request, res: Response, next: NextFunction) => {
router.post('', (req, res, next) => {
    provider.getCities(req.body.name.trim()).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    });
});
exports.cityRoutes = router;
