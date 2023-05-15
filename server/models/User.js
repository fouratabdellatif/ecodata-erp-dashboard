import mongoose from "mongoose";
import { ROLES } from "./Role.js";

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    name: { type: String },
    email: { type: String },
    password: String,
    department: { type: String },
    role: [
      {
        type: String,
        required: true,
        enum: ROLES,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
