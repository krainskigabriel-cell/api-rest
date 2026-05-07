const express = require('express');
const rotasItens = require('./routes/itens')

const app = express();
const PORT = 3000;

//Habilita o processamento de JSON
app.use(express.json());

//Define a rota base /itens
app.use('/itens', rotasItens);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});