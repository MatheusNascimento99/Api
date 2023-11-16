const express = require('express');
const conectarBancoDados = require('../middlewares/configBD');
const EsquemaCadastro = require('../models/modelCadastro')
const router = express.Router();


    // rota para cadastrar livro
    router.post('/cadastro', conectarBancoDados, async function (req, res) {
    try {
        // #swagger.tags = ['CADASTRO']
        let {id, titulo, num_paginas, isbn, editora } = req.body;
        const respostaBD = await EsquemaCadastro.create([{ id, titulo, num_paginas, isbn, editora }]);

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
          const respostaBD = await EsquemaCadastro.find();
        
          res.status(200).json({
            status: "OK",
            statusMensagem: "Todos os livros cadastrados!.",
            resposta: respostaBD, 
          })
      
        } catch (error) {
          return Error('Erro ao buscar, tente novamente !')
        }
      });


      // rota para buscar livro individualmente por Id
    router.get('/busca/:id', conectarBancoDados, async function (req, res) {
        try {
          const livroId = req.params.id
          const respostaBD = await EsquemaCadastro.findOne({_id:livroId});
      
          res.status(200).json({
            status: "OK",
            statusMensagem: "Livro encontrado!.",
            resposta: respostaBD
          })
      
        } catch (error) {
          return Error('Erro ao buscar, tente novamente !')
        }
      });


       // rota para editar o livro
       router.put('/editar/:id', conectarBancoDados, async function (req, res) {
        try {
            const livroId = req.params.id
            let { titulo, num_paginas, isbn, editora } = req.body;
            
            const livroAtualizado = await EsquemaCadastro.updateOne({_id: livroId}, {livroId, titulo, num_paginas, isbn, editora});

            res.status(200).json ({
                status:"OK",
                statusMensagem: "informações atualizadas!.",
                resposta: livroAtualizado
            })

        } catch (error) {
            return Error ('Erro ao atualizar, tente novamente.')
        }
       })

       // rota para deletar livro
       router.delete('/apagar/:id', conectarBancoDados, async function (req, res) {
        try{
            const livroId = req.params.id
            const respostaBD = await EsquemaCadastro.deleteOne({_id:livroId },);
            res.status(200).json({
                status: "OK",
                statusMensagem: "Livro apagado!",
                resposta: respostaBD
            })
        }catch {

        }
       })




module.exports = router;