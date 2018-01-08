const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename:'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool:'eval',
  devServer: {
    port: 5000
  },
  resolve: {
    alias: {
      'framework': path.join(__dirname, 'src/framework')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html'
    })
  ]

}
