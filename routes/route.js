function route(app) {
    // /cadastro/cadastrar

    // /cadastro/livro
    app.use('/', require('../routes/cadastro'))
    return;
}



module.exports = route;