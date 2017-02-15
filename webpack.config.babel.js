'use strict'

const webpack = require('webpack')
const WebpackFailPlugin = require('webpack2-fail-plugin')

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'is-lo.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: false,
    }),
    WebpackFailPlugin,
  ],
}
