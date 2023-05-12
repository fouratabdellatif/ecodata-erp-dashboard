import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataUser,
  // dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";
import { dataCategory } from "./data/category.js"
import { dataState } from "./data/state.js";
import { dataStatus } from "./data/status.js";
import { dataCustomer } from "./data/customer.js";
import Status from "./models/Status.js";
import Customer from "./models/Customer.js";
import Category from "./models/Category.js";
import State from "./models/State.js";
import Produit from "./models/Produit.js";
import { dataProduct } from "./data/product.js";
import Fulfilment from "./models/Fulfilment.js";
import { dataFulfilment } from "./data/fulfilment.js";
import Date from "./models/Date.js";
import { dataDate } from "./data/date.js";
import { dataCity } from "./data/city.js";
import City from "./models/City.js";
import FactTable from "./models/FactTable.js";
import { dataFactTable } from "./data/fact_table.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);



    // Category.insertMany(dataCategory);
    // State.insertMany(dataState);
    // Status.insertMany(dataStatus);
    // Fulfilment.insertMany(dataFulfilment);
    // Customer.insertMany(dataCustomer);
    // Date.insertMany(dataDate);
    // seedProducts();
    // seedCities();
    // seedFactTable();

  })
  .catch((error) => console.log(`${error} did not connect`));

async function seedProducts() {
  try {
    // Map the product categories to their corresponding documents
    const categoryMap = new Map();
    const categories = await Category.find();
    // const products = await Produit.find();
    categories.forEach((category) => {
      categoryMap.set(category.index, category);
    });

    // Create the product documents using the retrieved category documents
    const productDocs = dataProduct.map((product) => {
      const category = categoryMap.get(product.id_Category);
      return {
        ...product,
        category: category
      };
    });

    // Insert the product documents into the database
    await Produit.insertMany(productDocs);
    console.log("Products inserted successfully");
  } catch (error) {
    console.error(error);
  }
}

async function seedCities() {
  try {
    // Map the city states to their corresponding documents
    const stateMap = new Map();
    const states = await State.find();
    // const citites = await City.find();
    states.forEach((state) => {
      stateMap.set(state.index, state);
    });

    // Create the city documents using the retrieved state documents
    const cityDocs = dataCity.map((city) => {
      const state = stateMap.get(city.id_state);
      return {
        ...city,
        state: state
      };
    });

    // Insert the city documents into the database
    await City.insertMany(cityDocs);
    console.log("Cities inserted successfully");
  } catch (error) {
    console.error(error);
  }
}

async function seedFactTable() {
  try {

    const statusMap = new Map();
    const produitMap = new Map();
    const fullfilmentMap = new Map();
    const dateMap = new Map();
    const customerMap = new Map();
    const cityMap = new Map();
    const status = await Status.find();
    const produits = await Produit.find();
    const fullfilments = await Fulfilment.find();
    const dates = await Date.find();
    const customers = await Customer.find();
    const cities = await City.find();

    status.forEach((statut) => {
      statusMap.set(statut.index, statut);
    });

    produits.forEach((produit) => {
      produitMap.set(produit.index, produit);
    });

    fullfilments.forEach((fullfilment) => {
      fullfilmentMap.set(fullfilment.index, fullfilment);
    });

    dates.forEach((date) => {
      dateMap.set(date.index, date);
    });

    customers.forEach((customer) => {
      customerMap.set(customer.index, customer);
    });

    cities.forEach((city) => {
      cityMap.set(city.id, city);
    });

    // Create the fact_table documents using the retrieved state documents
    const factTableDocs = dataFactTable.map((factTable) => {
      const statut = statusMap.get(factTable.id_statut);
      const produit = produitMap.get(factTable.id_produit);
      const fullfilment = fullfilmentMap.get(factTable.id_fullfillement);
      const date = dateMap.get(factTable.id_date);
      const customer = customerMap.get(factTable.id_Customer);
      const city = cityMap.get(factTable.id_city);
      return {
        ...factTable,
        statut: statut,
        produit: produit,
        fullfilment: fullfilment,
        date: date,
        customer: customer,
        city: city
      };
    });

    // Insert the factTable documents into the database
    await FactTable.insertMany(factTableDocs);
    console.log("FactTable created successfully");
  } catch (error) {
    console.error(error);
  }
}

