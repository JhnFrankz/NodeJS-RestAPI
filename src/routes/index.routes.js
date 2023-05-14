import { Router } from "express";
import { pool } from '../db.js';

const router = Router();

/* async: la función que va a esperar a que se resuelva la promesa
await: será la promesa que se va a esperar */
router.get('/ping', async (req, res) => {
    // aqui se hace la consulta a la base de datos
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result[0]);
});

export default router;

