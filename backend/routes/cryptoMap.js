import express from "express";
import { getCryptoData } from "../controller/cryptoController.js";

const router = express.Router();

router.get("/crypto/:code", getCryptoData);

export default router;
