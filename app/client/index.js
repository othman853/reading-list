const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const resourcesRoutes = require('./bff/routes/resources')
const server = express()

server.use(bodyParser.json())

server.set('views', path.join(__dirname, 'static'))
server.use(express.static(path.join(__dirname, 'static', 'public')))
server.set('view engine', 'jade')

server.use('/', resourcesRoutes)

server.get('/', (_, res) => res.render('index.jade'))

module.exports = server
