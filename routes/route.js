function route(app) {
    app.use('/cadastro', require('./cadastro.js'))
    return;
}

module.exports = route;