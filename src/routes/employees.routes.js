import { Router } from "express";
// Nos permite crear un grupo de rutas

const router = Router();

router.get('/employees', (req, res) => res.send('Obteniendo lista de empleados'));
router.post('/employees', (req, res) => res.send('Creando un empleado'));
router.put('/employees', (req, res) => res.send('Actualizando un empleado'));
router.delete('/employees', (req, res) => res.send('Eliminando un empleado'));

// el export default, exporta todo lo que se encuentre en el archivo
export default router;
// para añadir ese grupo de rutas a la aplicación, se debe importar
// en el archivo principal de la aplicación, en este caso en index.js