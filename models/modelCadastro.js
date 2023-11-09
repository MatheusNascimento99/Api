const mongoose = require('mongoose');



const esquema = new mongoose.Schema(
    {
        Id:{
            Number,
            
        },
        Titulo:{
            String,
            
        },
        Paginas:{
            Number,
            
        },
        Isbn:{
            String,
            
        },
        Editora:{
            String,
            
        },

    },
    {
        timestamps: true
    }
);

const EsquemaCadastro = mongoose.models.Cadastro || mongoose.model('Cadastro', esquema);
module.exports = EsquemaCadastro;