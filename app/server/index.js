const { settings } = require('value-box')
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/resources')

const willLog = message => console.log.bind(console, message)

const server = express()

server.use(bodyParser.json())

server.use('/', routes)

server.use((req, res, next) =>
  res.status(404).json({ message: 'Route not found' })
)

mongoose.Promise = global.Promise

mongoose.connect(settings.database.url)

mongoose.connection.on('connected', willLog('Mongo Up'))

mongoose.connection.on('error', willLog('Mongo Error'))

mongoose.connection.on('disconnected', willLog('Mongo down'))

module.exports = server
