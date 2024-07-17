import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import syncDb from "./syncDb.js";
import router from "./routes/cryptoMap.js";
import cors  from 'cors';

dotenv.config();
const app = express();

app.use(cors({
    origin: process.env.CORS_URL,
    credentials: true
  }));


app.use("/", router);

const Port = process.env.PORT || 8000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
  syncDb();
});

const MongoDB_URL = process.env.MongoDB_URL;
Connection(MongoDB_URL);
