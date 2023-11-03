import { Router } from "express";

import usuarioRoutes from "./usuarioRoutes.js";
import libroRoutes from "./libroRoutes.js";
import intercambioRoutes from "./intercambioRoutes.js"; 



const router = Router();

router.use("/usuario", usuarioRoutes);
router.use("/libro", libroRoutes);
router.use("/intercambio", intercambioRoutes); 


export default router;
