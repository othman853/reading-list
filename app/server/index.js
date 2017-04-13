import settings from './settings.js'
import mongoose from 'mongoose'
import server from './server'

const willLog = message => console.log.bind(console, message)

mongoose.Promise = global.Promise

mongoose.connect(settings.database.url)

mongoose.connection.on('connected', willLog('Mongo Up'))

mongoose.connection.on('error', willLog('Mongo Error'))

mongoose.connection.on('disconnected', willLog('Mongo down'))

server.listen(
  settings.server.port,
  () => console.log(`Up on ${settings.server.port}`)
)
