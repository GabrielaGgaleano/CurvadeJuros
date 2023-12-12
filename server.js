const express = require('express');
const path = require('path');

const app = express();
const port = 3002;

// Servir arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

