import mongoose from "mongoose";

const ProduitSchema = new mongoose.Schema(
  {
    index: { type: Number, required: true },
    SKU_Code: { type: String, required: true },
    Design_No: { type: String, required: true },
    Stock: { type: Number, required: true },
    id_Category: { type: Number, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    Size: { type: String, required: true },
    Color: { type: String, required: true }
  },
  { timestamps: true }
);

const Produit = mongoose.model("Produit", ProduitSchema);
export default Produit;
