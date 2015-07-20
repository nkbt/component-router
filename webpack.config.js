var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var env = process.env.NODE_ENV || 'production';


var eslintLoader = {
  test: /\.js$/,
  loaders: ['eslint'],
  include: [new RegExp(path.join(__dirname, 'src'))]
};


module.exports = {
  devtool: 'eval',

  entry: [
    './src/example/reset.css',
    './src/example/Example.js'
  ].concat(env === 'production' ? [] : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]),

  output: {
    filename: 'index.js',
    path: path.resolve('./example')
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    })
  ].concat(env === 'production' ? [] : [
      new webpack.HotModuleReplacementPlugin()
    ]),

  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'babel'], include: [path.resolve('src')]},
      {
        test: /\.css$/,
        loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ],
    preLoaders: env === 'production' ? [] : [
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
    configFile: 'src/.eslintrc'
  },


  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};
