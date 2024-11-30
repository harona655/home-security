import {Router} from "express";
import {sendEmail} from "../controllers/mailServer.js";

const router = Router();

router.post("/", sendEmail);

export default router;