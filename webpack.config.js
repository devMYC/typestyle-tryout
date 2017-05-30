'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {

  context: resolve(__dirname, 'src'),

  entry: './main.tsx',

  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
    sourceMapFilename: '[name].map',
    publicPath: '/'
  },

  devtool: 'source-map',

  devServer: {
    contentBase: resolve(__dirname, 'public'),
    hot: true,
    port: 7331,
    stats: {
      colors: true,
      cached: true
    }
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },

  module: {
    loaders: [
      {
        test: /\.(ts)|(tsx)$/,
        use: [ 'ts-loader' ],
        exclude: resolve(__dirname, 'node_modules'),
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'public/index.html') })
  ]

}
