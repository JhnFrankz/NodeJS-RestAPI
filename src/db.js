import { createPool } from "mysql2/promise";
import { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } from "./config.js";
// el PORT no, porque es el puerto del servidor, no de la base de datos

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE,
});

/* export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    port: 3306,
    database: "companydb",
}); */