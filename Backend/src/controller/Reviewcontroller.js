import express from 'express'
import { Review } from '../models/Reviewmodel.js'

export const Registercontact = async (req, res) => {
    try {
        console.log("Incoming body:", req.body);
        let { name, email, review, role } = req.body
        if (!name || !email || !review || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        role = role.toLowerCase();
        const exist = await Review.findOne({ email })
        if (exist) {
            return res.status(400).json({ message: "Email already exist" })
        }
        const addReview = new Review({
            name,
            email,
            review,
            role,
        });
        await addReview.save()
        return res.status(200).json({ user: addReview });
    }
    catch (error) {
        console.log(error)
    }
}


export const getReview = async (req, res) => {
    try {
        const { role } = req.query;
        let reviews;
        if (role) {
            reviews = await Review.find({ role });
        }
        else {
            reviews = await Review.find();
        }
        res.status(200).json(reviews)
    }
    catch (error) {
        console.error("Error fetching reviews:", error.message);
        res.status(500).json({ message: "Error" })
    }
}