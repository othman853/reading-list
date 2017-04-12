const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const path = require('path')
const { settings } = require('value-box')

const server = express()

server.use(bodyParser.json())

server.set('views', path.join(__dirname, 'views' ))
server.use(express.static(path.join(__dirname, 'public')))
server.set('view engine', 'ejs')

server.get('/motd', (req, res) => {
  console.log('GET /resources')
  axios.get(`http://localhost:${settings.server.port}/resources`)
    .then(response => {
      console.log('OK')
      return res.json(response.data)
    })
    .catch(error => {
      const status = error.response ? error.response.status : 500
      const body = { error, message: 'Failed to connect to remote server' }
      return res.status(status).json(body)
    })
})

server.get('/', (_, res) => res.render('index.ejs'))

module.exports = server
