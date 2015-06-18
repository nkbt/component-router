var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var eslintLoader = {
  test: /\.js$/,
  loaders: ['eslint'],
  include: [new RegExp(path.join(__dirname, 'src'))]
};


module.exports = {
  devtool: 'eval',

  entry: [
    './src/example.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],

  output: {
    filename: 'index.js',
    path: path.resolve('./example')
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'babel'], include: [path.join(__dirname, 'src')]}
    ],
    preLoaders: [
      eslintLoader
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },


  stats: {
    colors: true
  },

  eslint: {
    configFile: 'src/.eslintrc',
    // Treat all warnings as errors too
    emitError: true
  }
};
