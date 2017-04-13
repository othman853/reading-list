import mongoose from 'mongoose'

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

export default mongoose.model('resources', Resource)
