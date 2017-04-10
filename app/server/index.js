const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express()

server.use(bodyParser.json())
server.get('/', routes)

module.exports = server
