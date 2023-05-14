import express from 'express';

const app = express();

app.get('/employees', (req, res) => res.send('Obteniendo lista de empleados'));
app.post('/employees', (req, res) => res.send('Creando un empleado'));
app.put('/employees', (req, res) => res.send('Actualizando un empleado'));
app.delete('/employees', (req, res) => res.send('Eliminando un empleado'));

app.listen(3000);
console.log('Server on port', 3000)