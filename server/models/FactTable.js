import mongoose from "mongoose";

const FactTableSchema = new mongoose.Schema(
  {
    id_purchases: { type: Number, required: true },
    actual_price: { type: Number, required: true },
    discount_percentage: { type: Number, required: true },
    discounted_price: { type: Number, required: true },
    GrossAmount: { type: Number, required: true },
    moving_avg: { type: Number, required: true },
    PCS: { type: Number, required: true },
    Rate: { type: Number, required: true },
    rating: { type: Number, required: true },
    customer: { type: String, required: true },
    SKU: { type: String, required: true },
    rates: { type: String, required: true },
    id_statut: { type: Number, required: true },
    id_produit: { type: Number, required: true },
    id_fullfillement: { type: Number, required: true },
    id_date: { type: Number, required: true },
    id_Customer: { type: Number, required: true },
    id_city: { type: Number, required: true },
    statut: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status"
    },
    produit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Produit"
    },
    fullfillement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fulfilment"
    },
    date: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Date"
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City"
    },
  },
  { timestamps: true }
);

const FactTable = mongoose.model("FactTable", FactTableSchema);
export default FactTable;
