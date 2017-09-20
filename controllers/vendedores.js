// require do express e do modelo de schema
const express = require('express');
const VendedorSchema = require('../schemas/vendedor');
// cria uma let recebendo o metodo Router() do express, para fazer o rotiamento da app.
let router = express.Router();
// lista os vendedores cadastrados no DB - vendedors
router.get('/', (req, res) => {
  VendedorSchema.find((error, vendedores) => {
    res.send(vendedores, 200);
  });
});
// lista pelo id como parametro /:id o vendedor no DB.
router.get('/:id', (req, res) => {
  VendedorSchema.findById(req.params.id, (error, vendedor) => {
    if(vendedor){
      res.send(vendedor, 200);
      return;
    };
    res.sendStatus(404);
  });
});
// post um novo vendedor no DB usando schema do modelo de schemas.
router.post('/', (req, res) => {
  let vendedor = new VendedorSchema(req.body);
  vendedor.save((error, resultado) => {
    if(error){
      res.send(error, 400);
    }
    res.send(resultado, 201);
  });
});
// exporta router e seus metodos para ser usado na aplicacao.
module.exports = router;
