import Product from "../models/Product.js";
import Produit from "../models/Produit.js";
import Customer from "../models/Customer.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import getCountryIso3 from "country-iso-2-to-3";
import FactTable from "../models/FactTable.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProduits = async (req, res) => {
  try {
    const products = await Produit.find()
      .populate('category',
        { _id: 1, index: 1, category: 1 }
      )
      .exec();

    // console.log(products);

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    // console.log(customers);
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPurchases = async (req, res) => {
  try {
    const fact_table = await FactTable.find()
      .populate('statut',
        { _id: 1, index: 1, Status: 1 }
      )
      .populate('produit',
        {
          _id: 1, index: 1,
          SKU_Code: 1,
          Design_No: 1,
          Stock: 1,
          id_Category: 1,
          Size: 1,
          Color: 1
        }
      )
      .populate('fullfillement',
        { _id: 1, index: 1, Fulfilment: 1 }
      )
      .populate('date',
        {
          _id: 1,
          index: 1,
          Year: 1,
          Quarter: 1,
          Month: 1,
          Day: 1,
          Trimester: 1
        }
      )
      .populate('customer',
        { _id: 1, index: 1, Customer: 1 }
      )
      .populate('city',
        { _id: 1, id: 1, Ship_City: 1 }
      )
      .exec();

    // console.log(products);

    res.status(200).json(fact_table);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
