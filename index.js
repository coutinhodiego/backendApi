// require do express e seus middleware e controladores
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const vendedoresController = require('./controllers/vendedores');
const loginController = require('./controllers/login');
const clienteController = require('./controllers/clientes');
// inicia a app.
const app = express();
//faz a conexao do DB atravez do mongoose.
mongoose.connect('mongodb://localhost/e-comerce');
//a app usa o middleware body-parser para trafegar em json().
app.use(bodyParser.json());
// a app usa o path para direcionar qual controlador atua de acordo com a requisicao.
app.use('/vendedor', vendedoresController);
app.use('/login', loginController);
app.use('/cliente', clienteController);
//ouve a conexao da app na porta 3000, mandando um log no terminal.
app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
