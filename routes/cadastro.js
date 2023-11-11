const express = require('express');
const conectarBancoDados = require('../middlewares/configBD');
const EsquemaCadastro = require('../models/modelCadastro')
const router = express.Router();
const app = express()
app.use(express.json())

    // rota para cadastrar livro
router.post('/cadastro', conectarBancoDados, async function (req, res) {
    try {
        // #swagger.tags = ['CADASTRO']
        let { titulo, paginas, isbn, editora } = req.body;
        const respostaBD = await EsquemaCadastro.create({ titulo, paginas, isbn, editora });

        res.status(200).json({
            status: "OK",
            statusMensagem: 'Livro cadastrado com sucesso!',
            resposta: respostaBD
        })
    } catch (error) {
        return (
            Error('Erro ao cadastrar, tente novamente !')
        )

    }

})

    // rota para buscar todos os livros
    router.get('/busca', conectarBancoDados, async function (req, res) {
        try {
         
          const respostaBD = await EsquemaCadastro.find(req.params.id);
      
          res.status(200).json({
            status: "OK",
            statusMensagem: "Livro encontrado!.",
            resposta: respostaBD
          })
      
        } catch (error) {
          return Error('Erro ao buscar, tente novamente !')
        }
      });

module.exports = router;