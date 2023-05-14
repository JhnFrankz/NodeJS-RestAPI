import { pool } from "../db.js";

export const getEmployees = (req, res) => res.send('Obteniendo lista de empleados');

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body;
    // cuando hacemos una consulta a la BD, es asincrona, por lo que se debe usar await
    const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary]); // rows tiene un objeto y dentro tiene una propiedad insertId
    // ponemos llaves porque rows es un objeto y queremos que nos devuelva el objeto
    res.send({
        id: rows.insertId,
        name,
        salary
    });
};

export const updateEmployee = (req, res) => res.send('Actualizando un empleado');

export const deleteEmployee = (req, res) => res.send('Eliminando un empleado');