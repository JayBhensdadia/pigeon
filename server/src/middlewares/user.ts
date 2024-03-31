import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';



export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {


    try {

        const token = req.cookies["token"];
        console.log(token);
        const verified = jwt.verify(token, process.env.JWT_SECRET ?? "Jay@123");
        next();

    } catch (error) {
        res.status(400).json({ msg: "login again!!!!" });
    }
}