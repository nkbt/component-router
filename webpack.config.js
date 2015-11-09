'use strict';


var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var babelLoader = 'babel?' +
  JSON.stringify({
    presets: ['es2015', 'react'],
    plugins: ['transform-es2015-modules-commonjs', 'transform-object-rest-spread']
  });


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
      {
        test: /\.css$/,
        loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {test: /\.js$/, loader: babelLoader, include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true}
};
