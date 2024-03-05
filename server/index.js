const express = require('express');
const app = express();
const env = require('dotenv'); //para armazenar variáveis ​​constantes no arquivo de ambiente
const cors = require('cors'); //para evitar erros de política cors
const db = require('./db'); //vamos conectar a conexão do banco de dados mysql, primeiro chamamos arquivo de database
const router = require('./routes/mapRoute');


//para chamar o arquivo env
env.config();
db

const port = process.env.PORT //deixe armazenar a porta no arquivo env, para chamar a variável env, use process.env.variable

app.use(express.json());
app.use(cors());

//chama a rota
app.use('/api',router)

//listen to port 2000 
app.listen(port, () =>{
    console.log(`Rodando na porta ${port}`);
})