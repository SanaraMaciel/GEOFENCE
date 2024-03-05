//chamando o modulo mysql 
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database: 'TESTE',
    port : 3306

})

connection.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log('Banco de dados conectado com sucesso');
    }
})

//exportar conexão
module.exports = connection