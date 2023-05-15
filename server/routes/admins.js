import express from "express";
import { addAdmin, getAllAdmins } from "../controllers/admins.js";

const router = express.Router();

router.post("/add", addAdmin);
router.get("/getAllAdmins", getAllAdmins);

export default router;