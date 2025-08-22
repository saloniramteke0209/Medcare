import express from 'express'
import { Auth } from '../models/Authmodels.js';
import bcrypt from "bcrypt";
// import { constants } from 'crypto';

export const Resetpassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        const user = await Auth.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() },
        })

        if (!user) {
            return res.status(400).json({ message: "Invaild" })
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;

        await user.save();
        res.json({ message: "Password reset successfull" })
    }
    catch (error) {
        console.log("Reset password error", error)
        res.status(500).json({ message: "Error resetting password" })
    }
}