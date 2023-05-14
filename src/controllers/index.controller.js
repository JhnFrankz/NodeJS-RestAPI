import { pool } from '../db.js';

export const ping = async (req, res) => {
    // aqui se hace la consulta a la base de datos
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result[0]);
};