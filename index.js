const express =require('express')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express()
const porta = 6969
app.use(express.json())


//Configuração do express

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const route = require('./routes/route');



//config endpoints (rotas) API

route(app);

//config servidor

app.listen(porta, () => {
    console.log(`Servidor operacional na porta ${porta}`)
})