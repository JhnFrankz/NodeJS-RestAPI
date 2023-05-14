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

app.listen(3000);
console.log('Server on port', 3000)

/* En src van los archivos de código fuente de la aplicación */
/* Y el resto son archivos de configuración y funcionamiento de BD o NodeJS */