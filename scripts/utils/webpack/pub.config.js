'use strict';


const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const {
  pathTo,
  plugins,
  loaders,
  resolve,
  stats,
  externals,
  INCLUDE_JS
} = require('./common');


module.exports = {
  mode: 'development',
  devtool: false,
  entry: pathTo('example', 'index.mjs'),
  output: {
    filename: 'bundle.js',
    path: pathTo('pub')
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.HISTORY': '"HASH"'}),
    plugins.html,
    plugins.include(INCLUDE_JS.concat(['styles.css'])),
    new MiniCssExtractPlugin({filename: 'styles.css'})
  ],
  module: {
    rules: [
      loaders.babel,
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: require.resolve('css-loader')},
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => ([autoprefixer({browsers: ['defaults', 'not dead']})])
            }
          }
        ]
      }
    ]
  },
  resolve,
  stats,
  externals
};
