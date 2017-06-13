"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authenticate(req, res, next) {
    if (!req || !req.session || !req.session.user) {
        res.json({
            data: null,
            status: {
                isSuccessful: false,
                message: "unauthenticated user!"
            }
        });
    }
    else {
        next();
    }
}
exports.authenticate = authenticate;
