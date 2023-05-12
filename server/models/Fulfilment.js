import mongoose from "mongoose";

const FulfilmentSchema = new mongoose.Schema(
  {
    index: { type: Number, required: true },
    Fulfilment: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Fulfilment = mongoose.model("Fulfilment", FulfilmentSchema);
export default Fulfilment;
