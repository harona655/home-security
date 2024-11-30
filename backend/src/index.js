import express from "express";
import  cors from "cors";
import bodyParser from "body-parser";
import methodOverrid from "method-override";
import mailRouer from "./routes/mailRouter.js";
import { config } from 'dotenv';
config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(methodOverrid());

app.use("/api/sendEmail", mailRouer);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});