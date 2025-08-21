
// router/NotificationRouter.js
import express from "express";
import { getNotifications } from "../controller/Notificationcontroller.js";


const Notificationrouter = express.Router();

Notificationrouter.get("/", getNotifications);

export default Notificationrouter;
