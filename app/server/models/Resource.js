const mongoose = require('mongoose')

const {assign} = Object

const attributes = {
  title: {type: String},
  source: {type: String}
}

const options = {
  versionKey: false
}

const schema = assign({}, attributes, options)

const Resource = mongoose.Schema(schema)

module.exports = mongoose.model('resources', Resource)
