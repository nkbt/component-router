'use strict';


var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


require('babel/polyfill');


module.exports = {
  devtool: 'source-map',
  entry: [
    './src/example/reset.css',
    './src/example/Example.js'
  ],
  output: {filename: 'bundle.js', path: path.resolve('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: [path.resolve('src')]},
      {
        test: /\.css$/,
        loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true}
};
