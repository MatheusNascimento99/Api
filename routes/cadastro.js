const express = require('express');
const conectarBancoDados = require ('../middlewares/configBD');
const EsquemaCadastro = require('../models/modelCadastro')
const router = express.Router();
// /cadastrar 

router.post('/cadastrar', conectarBancoDados,  async function(req, res) {
    try {
        // #swagger.tags = ['CADASTRO']
        const { Id, Titulo, Paginas, Isbn, Editora} = req.body;
        const respostaBD = await EsquemaCadastro.create({Id, Titulo, Paginas, Isbn, Editora});

        res.status(200).json({
            status:"OK",
            statusMensagem: 'Livro cadastrado com sucesso"',
            resposta: respostaBD
        })


    } catch (error){
        return (
            Error('Erro ao cadastrar, tente novamente !')
        )
        

    }


    

})


module.exports = router;