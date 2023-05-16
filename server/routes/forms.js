import express from "express";
import { createForm } from "../controllers/forms.js";

const router = express.Router();

router.post("/forms/add", createForm);

export default router;
