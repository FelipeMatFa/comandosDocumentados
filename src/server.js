// Importar o arquivo de configuração
const app = require('./app');
// Importar a porta do servidor
const port = app.get('port');

app.get('/api', (request, response) => {
    response.send('Retorno de lista de informação do Banco de dados');
    console.log('get')
});

app.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações!');
    console.log('post')
});

app.put('/api/:id', (request, response) => {
    response.send('Método utilizado para editar informações!');
    console.log('put')
});

app.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para deletar informações!');
    console.log('delete')
});


// Testar servidor
app.listen(port, () => console.log(`Running at port ${port}`));
