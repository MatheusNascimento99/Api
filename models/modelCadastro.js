const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
    {
        id:Number,
        titulo: String,
        num_paginas: Number,
        isbn: String,
        editora:String
    },
    {
        timestamps: true
    }
);

const EsquemaCadastro = mongoose.models.Cadastro || mongoose.model('Cadastro', esquema);
module.exports = EsquemaCadastro;