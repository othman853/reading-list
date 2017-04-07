require('value-box/path')(__dirname, ['/values']);
const { settings } = require('value-box');
const server = require('./server');

server.listen(settings.port);
