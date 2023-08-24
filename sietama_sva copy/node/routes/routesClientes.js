import express from 'express'
import { getClientes, getCliente } from '../controllers/Clientes_Controller.js'
const router = express.Router()

router.get('/', getClientes)
router.get('/editar/:id', getCliente)

export default router