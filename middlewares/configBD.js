const mongoose = require('mongoose');


async function conectarBancoDados(req = null, res = null, next = null) {
  try {
    await mongoose.connect("mongodb+srv://matheuscrnascimento:<password>@cluster.qztpgwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster");
    console.log('Conectado ao banco de dados!');
    try { next(); } catch { };
    return mongoose;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = conectarBancoDados;

