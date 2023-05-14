import express from 'express';
// se usa el .js porque se esta usando el type: module
import { pool } from './db.js';

const app = express();

/* async: la función que va a esperar a que se resuelva la promesa
await: será la promesa que se va a esperar */

app.get('/ping', async (req, res) => {
    // aqui se hace la consulta a la base de datos
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result[0]);
});

app.get('/employees', (req, res) => res.send('Obteniendo lista de empleados'));
app.post('/employees', (req, res) => res.send('Creando un empleado'));
app.put('/employees', (req, res) => res.send('Actualizando un empleado'));
app.delete('/employees', (req, res) => res.send('Eliminando un empleado'));

app.listen(3000);
console.log('Server on port', 3000)