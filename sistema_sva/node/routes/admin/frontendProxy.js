import express from 'express'
/* const express = require('express'); */
import { createProxyMiddleware } from 'http-proxy-middleware';
/* const { createProxyMiddleware } = require('http-proxy-middleware'); */

const app = express();

// Configurar el middleware de redirección
const frontendProxy = createProxyMiddleware({
  target: 'http://localhost:3000', // URL del frontend
  changeOrigin: true, // Cambiar el encabezado "Host" en la solicitud
  pathRewrite: {
    '^/app': '', // Redirigir "/app" a la raíz del frontend
  },
});

// Usar el middleware de redirección
app.use('/app', frontendProxy);

// Resto de la configuración del servidor de Node.js

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
