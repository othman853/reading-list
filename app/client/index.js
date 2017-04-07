const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());
server.get('/', (_, res) => res.send('Yo, this is client.'));

module.exports = server;
