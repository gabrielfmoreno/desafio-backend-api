const express = require('express');
const app = express();

const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');
const indexRouter = require('./routes/index');

app.use(express.json());

app.use('/login', authRoutes);
app.use('/', indexRouter);
app.use('/clientes', clienteRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/produtos', produtoRoutes);

module.exports = app;
