import bcrypt from "bcryptjs"
import crypto from "crypto";
import User from "../models/User.js";
import { ROLES } from "../models/Role.js";
import Token from "../models/Token.js";

export const addAdmin = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        department,
        password,
    } = req.body;

    try {
        const existingAdmin = await User.findOne({
            email,
        });

        if (existingAdmin)
            return res.status(400).json({ message: "This email already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
            firstName,
            lastName,
            department,
            role: ROLES[1],
        });

        var token = new Token({
            _userId: result._id,
            token: crypto.randomBytes(16).toString("hex"),
        });

        token.save();

        res.status(201).json({ result, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find();
        return res.status(200).json(admins);
    } catch (error) {
        return res.status(500).json({
            message: "Something went Wrong",
            reason: error.toString(),
            success: false
        })
    }
}

