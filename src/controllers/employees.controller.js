import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
};

export const getEmployee = async (req, res) => {
    // rows es un arreglo de objetos con los datos de la consulta
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);

    if (rows.length <= 0) return res.status(404).json({
        message: 'Employee not found'
    });

    res.json(rows[0]);
};

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

export const deleteEmployee = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Employee not found'
    });
    
    res.sendStatus(204); // Todo salio bien, pero no hay contenido para devolver
};

export const updateEmployee = (req, res) => res.send('Actualizando un empleado');