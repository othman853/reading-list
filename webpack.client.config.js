const path = require('path')
const webpack = require('webpack')

const paths = {
  statics: path.join(__dirname, 'dist', 'app', 'client', 'static'),
  components: path.join(__dirname, 'app', 'client', 'components')
}

module.exports = {

  entry: path.join(paths.components, 'main.js'),
  output: {
    path: paths.statics,
    filename: 'dist.js'
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
}
