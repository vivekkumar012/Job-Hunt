import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectdb from './utils/db.js';
import userRouter from './routes/user.route.js';
dotenv.config({});

const app = express();

app.get("/", (req, res) => {
    res.send("Hi I am vivek a full stack developer from bihar")
});

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'http//localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

const port = process.env.PORT || 3000

//api's
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
    connectdb();
    console.log(`server is listening on port${port}`);
})