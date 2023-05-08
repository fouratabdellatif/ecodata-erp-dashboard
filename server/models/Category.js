import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    index: { type: Number, required: true },
    category: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;
