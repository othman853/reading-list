import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import resourcesRoutes from './routes/resources'

const server = express()

server.use(bodyParser.json())

server.set('views', path.join(__dirname, '..', 'static'))
server.use(express.static(path.join(__dirname, '..', 'static')))
server.set('view engine', 'jade')

server.use('/', resourcesRoutes)

server.get('/', (_, res) => res.render('index.jade'))

export default server
