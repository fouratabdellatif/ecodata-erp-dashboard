import express from 'express';
import Form from '../models/Form.js';

const router = express.Router();

export const getForms = async (req, res) => {
    try {
        const forms = await Form.find().sort({ createdAt: 1 });

        res.status(200).json(forms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createForm = async (req, res) => {
    const {
        name,
        email,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10
    } = req.body;

    const newForm = new Form({
        name,
        email,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10
    })

    try {

        await newForm.save();

        res.status(201).json(newForm);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;