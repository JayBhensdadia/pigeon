import express, { Request, Response, json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { userRouter } from './routes/user';


dotenv.config();
const PORT = process.env.PORT ?? 8888;
const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());
app.use(json());
app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hi there" });
});


app.listen(PORT, () => {
    console.log(`server process running on port ${PORT}`);
})


