'use strict';


const webpack = require(`webpack`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);

const {
  pathTo,
  plugins,
  loaders,
  resolve,
  stats,
  externals,
  INCLUDE_JS
} = require(`./common`);


module.exports = {
  devtool: false,
  entry: pathTo(`example`, `index.js`),
  output: {
    filename: `bundle.js`,
    path: pathTo(`pub`)
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.HISTORY': JSON.stringify('HASH')
    }),
    plugins.define,
    plugins.html,
    plugins.include(INCLUDE_JS.concat([`styles.css`])),
    new ExtractTextPlugin(`styles.css`)
  ],
  module: {
    rules: [
      loaders.babel,
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: `style-loader`,
          use: `css-loader`
        })
      }
    ]
  },
  resolve,
  stats,
  externals
};
