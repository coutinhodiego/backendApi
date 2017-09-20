// require o express o schema e ativa Router()
const express = require('express');
const VendedorSchema = require('../schemas/vendedor');
let router = express.Router();

// insere informacoes via post para filtrar um vendedor cadastrado no DB
router.post('/', (req, res) => {
    VendedorSchema.findOne(req.body, (error, vendedor) => {
      if(vendedor){
        res.send(vendedor, 200);
        return;
      };
      res.sendStatus(400);
    });
});
// exporta router para ser usado na aplicacao.
module.exports = router;
