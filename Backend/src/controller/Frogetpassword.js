import express from 'express'
import { Auth } from '../models/Authmodels.js';
import crypto from "crypto"

export const Frogetpassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await Auth.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        const resetToken = crypto.randomBytes(32).toString("hex")//generates token and stored in db
        user.resetToken = resetToken;
        user.resetTokenExpiry = Date.now() + 15 * 60 * 1000;//set timer
        await user.save({ validateBeforeSave: false });

        return res.status(200).json({ message: "Password reset token generated", resetToken, });
    }
    catch (error) {
        console.error("Forgot password error", error)
        res.status(500).json({ message: "Error is forgot password" })
    }
}