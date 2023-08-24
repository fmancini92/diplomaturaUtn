import express, { Router } from 'express'
import cors from 'cors'
import db from './database/db.js'
import router from './routes/routes.js'
import routerClientes from './routes/routesClientes.js'

const app = express()

app.use(cors()) //Permite que otros dominios accedan a la API
app.use(express.json())
app.use('/cuentas/', router)
app.use('/clientes/', routerClientes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB');
} catch (error) {
    console.log('El error de conexion es: ${error}');
    
}

/* app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
}) */

app.listen(8000, ()=>{
    console.log("Servidor corriendo en http://localhost:8000")});
