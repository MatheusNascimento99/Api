const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
    {
        titulo: String,
        paginas: Number,
        isbn: String,
        editora:String
    },
    {
        timestamps: true
    }
);

const EsquemaCadastro = mongoose.models.Cadastro || mongoose.model('Cadastro', esquema);
module.exports = EsquemaCadastro;