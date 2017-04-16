import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/resources'

const server = express()

server.use(bodyParser.json())

server.use('/', routes)

server.use((req, res) => res.status(404).json({message: 'Route not found'}))

export default server
