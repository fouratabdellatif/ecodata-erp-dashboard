import mongoose from "mongoose";

const StateSchema = new mongoose.Schema(
  {
    index: { type: Number, required: true },
    Ship_State: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const State = mongoose.model("State", StateSchema);
export default State;
