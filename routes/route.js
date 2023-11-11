function route(app) {
    // /cadastro/cadastrar

    // /cadastro/livro
    app.use('/cadastro', require('../routes/cadastro'))
    return;
}



module.exports = route;