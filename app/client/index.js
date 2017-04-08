const express = require('express');
const bodyParser = require('body-parser');
const got = require('got');
const path = require('path');
const { settings } = require('value-box');

const server = express();

server.use(bodyParser.json());

server.set('views', path.join(__dirname, 'views' ));
server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'ejs');

server.get('/motd', (req, res) => {
  got(`http://localhost:${settings.server.port}/`)
    .then(response => res.json(JSON.parse(response.body)))
    .catch(error => res.send(error));
});

server.get('/', (_, res) => res.render('index.ejs'));

module.exports = server;
