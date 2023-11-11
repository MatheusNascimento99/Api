const mongoose = require('mongoose');


async function conectarBancoDados(req = null, res = null, next = null) {
  try {
    await mongoose.connect("mongodb+srv://matheuscrnascimento:123@cluster.qztpgwh.mongodb.net/?retryWrites=true&w=majority");
    console.log('Conectado ao banco de dados!');
    try { next(); } catch { };
    return mongoose;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = conectarBancoDados;

