import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
};

export const getEmployee = async (req, res) => {
    try {
        // rows es un arreglo de objetos con los datos de la consulta
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
};

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body;

    try {
        // cuando hacemos una consulta a la BD, es asincrona, por lo que se debe usar await
        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary]); // rows tiene un objeto y dentro tiene una propiedad insertId
        // ponemos llaves porque rows es un objeto y queremos que nos devuelva el objeto
        res.send({
            id: rows.insertId,
            name,
            salary
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        });

        res.sendStatus(204); // Todo salio bien, pero no hay contenido para devolver
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
};

export const updateEmployee = async (req, res) => {
    const { id } = req.params; // equivalente a const id = req.params.id;
    const { name, salary } = req.body;

    try {
        // El IFNULL es para que si no se envia un valor, se mantenga el valor que ya tenia
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);

        console.log(result);

        if (result.affectedRows == 0) return res.status(404).json({
            message: 'Employee not found'
        });

        // Hacemos select ya que el update no devuelve nada y necesitamos los datos actualizados para devolverlos en la respuesta
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

        // rows[0] porque rows es un arreglo de objetos y queremos el primer objeto
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
};