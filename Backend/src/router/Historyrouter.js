// routes/historyRoutes.js
import express from "express";
import { addHistory, getHistoryByPatient, getMyHistory } from "../controller/Historycontroller.js";


const Historyrouter = express.Router();
Historyrouter.post("/", addHistory);
Historyrouter.get("/:patientId", getHistoryByPatient);
Historyrouter.put("/me", getMyHistory);

export default Historyrouter;