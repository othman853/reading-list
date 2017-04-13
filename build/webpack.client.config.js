const path = require('path')
const webpack = require('webpack')

const paths = {
  statics: path.join(__dirname, '..', 'dist', 'client', 'static', 'js'),
  components: path.join(__dirname, '..', 'app', 'client', 'components'),
}

module.exports = {

  entry: path.join(paths.components, 'main.js'),
  output: {
    path: paths.statics,
    filename: 'dist.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]

}
