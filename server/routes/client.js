import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  getProduits,
  getPurchases
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/produits", getProduits);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/purchases", getPurchases);
router.get("/geography", getGeography);

export default router;
