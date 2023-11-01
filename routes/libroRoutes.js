import { Router } from "express";
import LibroController from "../controller/libroController.js";
const libroRoutes = Router();

const libroController = new LibroController();

libroRoutes.get("", libroController.getAllLibros);
libroRoutes.get("/:id/", libroController.getLibroById);
libroRoutes.post("", libroController.createLibro);
libroRoutes.put("/:id", libroController.updateLibro);
libroRoutes.delete("/:id", libroController.deleteLibro);

export default libroRoutes;
