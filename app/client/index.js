const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const path = require('path')
const resourcesRoutes = require('./bff/routes/resources');
const server = express()

server.use(bodyParser.json())

server.set('views', path.join(__dirname, 'views' ))
server.use(express.static(path.join(__dirname, 'public')))
server.set('view engine', 'jade')

server.use('/', resourcesRoutes)

server.get('/', (_, res) => res.render('index.jade'))

module.exports = server
