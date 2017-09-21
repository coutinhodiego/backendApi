const express = require('express');
const ClienteSchema = require('../schemas/cliente');
const expressJwt = require('express-jwt');

let router = express.Router();

router.use(expressJwt({secret : 'bolinhodechuva'}));

router.post('/', (req, res) => {
  let cliente = new ClienteSchema(req.body);
  cliente.vendedor = req.user._id;

  cliente.save((error, resultado) => {
    if(error){
      res.send(error, 404);
    };
    res.send(resultado, 201);
  });
});

router.get('/', (req, res) => {
  ClienteSchema.find((error, clientes) => {
    res.send(clientes, 200);
  });
});

module.exports = router;
