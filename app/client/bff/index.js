import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const STATICS_PATH = path.join(__dirname, '..', 'static')
const INDEX_PAGE = (_, res) => res.render('index.jade')

const server = express()

server.use(bodyParser.json())

server.set('views', STATICS_PATH)
server.use(express.static(STATICS_PATH))
server.set('view engine', 'jade')

server.use('/', routes)
server.get('/', INDEX_PAGE)

export default server
