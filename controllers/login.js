// require o express o schema e ativa Router(), gerador de hash e token para as senhas.
const express = require('express');
const VendedorSchema = require('../schemas/vendedor');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
let router = express.Router();

// insere informacoes via post para filtrar um vendedor cadastrado no DB
router.post('/', (req, res) => {
    const query = { email : req.body.email};

    VendedorSchema.findOne(query, (error, vendedor) => {
      if(vendedor && passwordHash.verify(req.body.senha, vendedor.senha)){ //confere se a senha é igual ao hash salvo
        const token = jwt.sign({_id : vendedor._id}, 'bolinhodechuva'); //gerando o token        
        res.set('Authorization', token);
        res.send(vendedor, 200);
        return;
      };
      res.sendStatus(400);
    });
});
// exporta router para ser usado na aplicacao.
module.exports = router;
