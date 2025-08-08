import express from 'express'
import { Contact } from '../models/Contactmodel.js'



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
        const addContact = new Contact({
            name,
            email,
            review
        });
        await addContact.save()
        return res.status(200).json({ user: addContact });
    }
    catch (error) {
        console.log(error)
    }
}


export const getContact = async (req, res) => {
    try {
        const contact = await Contact.find()
        res.status(200).json(contact)
    }
    catch (error) {
        res.status(500).json({ message: "Error" })
    }
}