import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    index: { type: Number, required: true },
    Customer: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
