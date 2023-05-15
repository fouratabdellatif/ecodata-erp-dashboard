import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";
import { getForms } from "../controllers/forms.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/forms", getForms);
router.get("/performance/:id", getUserPerformance);

export default router;
