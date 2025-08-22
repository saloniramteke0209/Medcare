// routes/historyRoutes.js
import express from "express";
import { addHistory, getHistoryByPatient, updateHistory } from "../controller/Historycontroller.js";


const Historyrouter = express.Router();
Historyrouter.post("/", addHistory);
Historyrouter.get("/:patientId", getHistoryByPatient);
Historyrouter.put("/:id", updateHistory);

export default Historyrouter;