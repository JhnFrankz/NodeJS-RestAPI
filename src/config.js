import { config } from "dotenv";

//Con estas lineas, ya se están cargando las variables de entorno
config();

// process es un objeto global de NodeJS
// process.env es un objeto que contiene todas las variables de entorno
export const PORT = process.env.PORT || 3000;

export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "companydb";
export const DB_PORT = process.env.DB_PORT || 3306;

// PORT es el servidor y DB_PORT es la base de datos


