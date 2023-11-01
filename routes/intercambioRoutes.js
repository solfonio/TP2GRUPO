import { Router } from "express";
import IntercambioController from "../controller/intercambioController.js";
const intercambioRoutes = Router();

const intercambioController = new IntercambioController();

intercambioRoutes.get("", intercambioController.getAllIntercambios);
intercambioRoutes.get("/:id/", intercambioController.getIntercambioById);
intercambioRoutes.post("", intercambioController.createIntercambio);
intercambioRoutes.put("/:id", intercambioController.updateIntercambio);
intercambioRoutes.delete("/:id", intercambioController.deleteIntercambio);

export default intercambioRoutes;
