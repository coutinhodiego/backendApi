//require de mongoose para aplicar as propriedades do mongoose como o schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// cria uma const com um modelo de schema do mongoose, passando o (nome do modelo/colecao, schema)
const ClienteSchema = mongoose.model('Cliente', {
  nome: {type: String, required: true},
  email: {type: String, required: true},
  telefone: String,
  vendedor: {type: Schema.ObjectId, required: true}
});
//exporta a const VendedorSchema para servir de molde de busca, alteracao, inclusao e exclusao.
module.exports = ClienteSchema;
