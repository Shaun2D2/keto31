const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/js/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
}
