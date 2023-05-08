import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema(
  {
    index: { type: Number, required: true },
    Status: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Status = mongoose.model("Status", StatusSchema);
export default Status;
