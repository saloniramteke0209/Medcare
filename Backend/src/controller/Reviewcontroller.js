import express from 'express'
import { Review } from '../models/Reviewmodel.js'

export const Registercontact = async (req, res) => {
    try {
        const { name, email, review } = req.body
        if (!name || !email || !review) {
            return res.status(400).json({ message: "Fill all information" })
        }
        const exist = await Contact.findOne({ email })
        if (exist) {
            return res.status(400).json({ message: "Email already exist" })
        }
        const addReview = new Review({
            name,
            email,
            review
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
        const review = await Review.find()
        res.status(200).json(review)
    }
    catch (error) {
        res.status(500).json({ message: "Error" })
    }
}