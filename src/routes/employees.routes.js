// Nos permite crear un grupo de rutas
import { Router } from "express";
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);
// El :id es un parametro que se puede pasar por la url gracias a express
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployee);
router.delete('/employees/:id', deleteEmployee);
// el patch es para actualizar solo algunos campos
// el put es para actualizar todos los campos según REST
router.patch('/employees/:id', updateEmployee);

// el export default, exporta todo lo que se encuentre en el archivo
export default router;
// para añadir ese grupo de rutas a la aplicación, se debe importar
// en el archivo principal de la aplicación, en este caso en index.js