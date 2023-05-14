// Nos permite crear un grupo de rutas
import { Router } from "express";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);
router.post('/employees', createEmployee);
router.put('/employees', updateEmployee);
router.delete('/employees', deleteEmployee);

// el export default, exporta todo lo que se encuentre en el archivo
export default router;
// para añadir ese grupo de rutas a la aplicación, se debe importar
// en el archivo principal de la aplicación, en este caso en index.js