import * as express from "express";
import { Request, Response, NextFunction } from "express";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    // if (!req || !req.session || !req.session.user) {
    //     res.json({
    //         data: null,
    //         status: {
    //             isSuccessful: false,
    //             message: "unauthenticated user!"
    //         }
    //     })
    // } else {
        next();
    // }
}