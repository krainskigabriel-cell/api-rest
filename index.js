const express = require('express');
const rotasItens = require('./routes/itens')

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/itens', rotasItens);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
