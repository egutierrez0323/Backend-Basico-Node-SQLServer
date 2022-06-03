import express from 'express';
// const express = require('express');
//Es lo mismo pero con codigo de js antiguo
import config from './config'

import productsRoutes from './routes/products.routes'

const app = express();

//Configuraciones
app.set('port', config.port);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false}))

app.use(productsRoutes);

export default app;