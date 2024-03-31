import { Router, Request, Response } from "express";
import { signin, signup } from "../controllers/userController";
import { userMiddleware } from "../middlewares/user";

export const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/", userMiddleware, (req: Request, res: Response) => {
    res.json({ msg: "hi user" });
});