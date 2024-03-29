import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  getProduits,
  getPurchases,
  getKpis,
  getCitiesGeo
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/produits", getProduits);
router.get("/customers", getCustomers);
router.get("/kpis", getKpis);
router.get("/transactions", getTransactions);
router.get("/purchases", getPurchases);
router.get("/geography", getGeography);
router.get("/citiesgeo", getCitiesGeo);

export default router;
