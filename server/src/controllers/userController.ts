import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { PrismaClient } from "@prisma/client";
import { hashIt, verifyPassword } from "../utils/hash";

export const signup = async (req: Request, res: Response) => {

    const prisma = new PrismaClient();
    try {
        console.log(req.body);
        const { firstname, lastname, email, password } = req.body;

        const hashedPassword = await hashIt(password);

        const user = await prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                password: hashedPassword
            }
        });


        const token = jwt.sign({ email }, process.env.JWT_SECRET ?? "Jay@123");
        res.cookie("token", token, {
            expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)),
        })
        res.json({
            msg: "user created successfully!!!!",
        });



    } catch (error) {
        console.log(error);

        res.status(400).json({ msg: "invalid credentials" });
    }
}
export const signin = async (req: Request, res: Response) => {

    const prisma = new PrismaClient();
    try {
        console.log(req.body);
        const { email, password } = req.body;

        const hashedPassword = await hashIt(password);
        console.log(hashedPassword);

        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        if (!user) {
            return res.status(400).json({ msg: "invalid email" });
        }

        const paswordVerification = await verifyPassword(password, user.password);

        if (paswordVerification) {

            const token = jwt.sign({ email }, process.env.JWT_SECRET ?? "Jay@123");
            res.cookie("token", token, {
                expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)),
            })
            return res.json({
                msg: "logged in",
            });
        } else {
            return res.status(400).json({ msg: "invalid password" });
        }




    } catch (error) {
        console.log(error);

        return res.status(500).json({ msg: "internal server error" });
    }
}


