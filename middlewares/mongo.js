const mongoose = require ('mongoose')

let conn

const connection = () => {
    if (conn) {         // aqui se já houver uma conecxão, eu faço ele retornar ela mesma na linha debaixo, caso não haja ainda uma conecxão eu a crio na linha 10
        return conn
    }

    conn = mongoose.connect("mongodb+srv://matheuscrnascimento:123@cluster.yhr4zfs.mongodb.net/localhost?retryWrites=true&w=majority")

}

module.exports = connection