function route(app) {
    app.use('/cadastro', require('../routes/cadastro'))
    return;
}

module.exports = route;