// Importar pacote do express
const express = require('express');
// Instanciar o Router na variavel router
const router = express.Router();

router.get('/api', (request, response) => {
    response.send('Retorno de lista de informação do Banco de dados');
    console.log('get')
});

router.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações!');
    console.log('post')
});

router.put('/api/:id', (request, response) => {
    response.send('Método utilizado para editar informações!');
    console.log('put')
});

router.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para deletar informações!');
    console.log('delete')
});

module.exports = router;