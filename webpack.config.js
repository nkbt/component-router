var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
    './src/example/Example.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],

  output: {
    filename: 'index.js',
    path: path.resolve('./example')
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', {allChunks: true})
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?plugins=object-assign'],
        include: [path.join(__dirname, 'src')]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style',
          'css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]')
      }
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
