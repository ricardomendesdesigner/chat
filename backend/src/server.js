const { WebSocketServer } = require('ws'); // Importa a biblioteca 'ws' que permite criar um servidor WebSocket.
const dotenv = require('dotenv'); // Importa a biblioteca 'dotenv' para carregar variáveis de ambiente.

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env.

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })
// Cria um servidor WebSocket na porta definida nas variáveis de ambiente ou 8080.

wss.on('connection', (ws) => { // Escuta eventos de conexão de clientes.
    ws.on('error', console.error) // Escuta erros na conexão do WebSocket e imprime no console.

  
    ws.on('message', (data) => { // Escuta mensagens enviadas pelo cliente.
        wss.clients.forEach((client) => client.send(data.toString()))

        
    });

    console.log('client connected') // Imprime uma mensagem no console quando um cliente se conecta.
})