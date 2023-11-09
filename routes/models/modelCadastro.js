const mongoose = require('mongoose');



const esquema = new mongoose.Schema(
    {
        Id:{
            Number,
            required: 'é obrigatório!',
        },
        Titulo:{
            String,
            required: 'é obrigatório',
        },
        Paginas:{
            Number,
            
        },
        Isbn:{
            String,
            
        },
        Editora:{
            String,
            required: 'é obrigatório',
        },

    },
    {
        timestamps: true
    }
);

const EsquemaCadastro = mongoose.models.Cadastro || mongoose.model('Cadastro', esquema);
module.exports = EsquemaCadastro;