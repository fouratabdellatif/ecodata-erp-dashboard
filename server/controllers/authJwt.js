import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { secret } from "../middlewares/auth.js";
import User from "../models/User.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "No account found with this email." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        role: existingUser.role,
      },
      secret,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      result: existingUser,
      token
    });
  } catch (error) {
    res.status(500).json({ message: "Une erreur s'est produite. Veuillez réessayer!" });
    console.log(error);
  }
};