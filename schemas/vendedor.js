//require de mongoose para aplicar as propriedades do mongoose.
const mongoose = require('mongoose');
// cria uma const com um modelo de schema do mongoose, passando o (nome do modelo/colecao, schema)
const VendedorSchema = mongoose.model('Vendedor', {
  nome: {type: String, required: true},
  email: {type: String, required: true},
  telefone: String,
  senha: {type: String, required: true}
});
//exporta a const VendedorSchema para servir de molde de busca, alteracao, inclusao e exclusao.
module.exports = VendedorSchema;
