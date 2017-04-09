const path = require('path');
const webpack = require('webpack');

const ASSETS_PATH = path.join(__dirname, '..', 'app', 'client', 'public', 'js');

module.exports = {

  entry: path.join(ASSETS_PATH, 'src', 'main.js'),
  output: {
    path: ASSETS_PATH,
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

};
