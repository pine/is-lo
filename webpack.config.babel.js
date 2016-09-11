'use strict'

const webpack = require('webpack')
const WebpackFailPlugin = require('webpack-fail-plugin')

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'is-lo.min.js',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: false,
    }),
    WebpackFailPlugin,
  ],
}
