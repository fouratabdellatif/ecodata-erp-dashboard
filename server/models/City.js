import mongoose from "mongoose";

const CitySchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    Ship_City: {
      type: String,
      required: true
    },
    id_state: { type: Number, required: true },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State"
    },
  },
  { timestamps: true }
);

const City = mongoose.model("City", CitySchema);
export default City;
