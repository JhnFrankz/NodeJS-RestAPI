import { Router } from "express";
import { ping } from '../controllers/index.controller.js';

const router = Router();

/* async: la función que va a esperar a que se resuelva la promesa
await: será la promesa que se va a esperar */
router.get('/ping', ping);

export default router;

