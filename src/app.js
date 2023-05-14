import express from 'express';
// como es un export default, no se usa llaves y puedo usar cualquier nombre
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
// se usa el .js porque se esta usando el type: module

const app = express();

// primero recibe los datos, lo convierte a json y luego lo envia a las rutas
app.use(express.json());

app.use(indexRoutes);
app.use('/api', employeesRoutes);

// Una vez pasó por todas las rutas, si busca una ruta que no existe
// se ejecuta este middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

export default app;

// Este archivo tiene la configuración de Express y llama a las rutas