import mongoose from "mongoose";

const DateSchema = new mongoose.Schema(
  {
    index: { type: Number, required: true },
    Year: {
      type: Number,
      required: true
    },
    Quarter: {
      type: String,
      required: true
    },
    Month: {
      type: String,
      required: true
    },
    Day: {
      type: Number,
      required: true
    },
    Trimester: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Date = mongoose.model("Date", DateSchema);
export default Date;
