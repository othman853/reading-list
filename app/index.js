require('value-box/path')(__dirname, ['/values']);
const { settings } = require('value-box');

const server = require('./server');
const client = require('./client');

const log = (app, port) => console.log(`${app} up on ${port}`);

server.listen(settings.server.port, () => {

  log('Server', settings.server.port);

  client.listen(settings.client.port, () => log('Client', settings.client.port));
});
