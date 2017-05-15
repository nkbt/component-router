'use strict';


const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
const webpack = require(`webpack`);

const {
  pathTo,
  plugins,
  loaders,
  resolve,
  stats,
  externals
} = require(`./common`);


module.exports = {
  devtool: false,
  entry: pathTo(`example`, `index.js`),
  output: {
    filename: `bundle.js`,
    path: pathTo(`pub`)
  },
  plugins: [
    plugins.define,
    new webpack.DefinePlugin({
      'process.env.HISTORY': JSON.stringify('HASH')
    }),
    plugins.html,
    plugins.include([
      `https://unpkg.com/react/dist/react.min.js`,
      `https://unpkg.com/react-dom/dist/react-dom.min.js`,
      `https://unpkg.com/redux/dist/redux.min.js`,
      `https://unpkg.com/qs/dist/qs.js`,
      `https://unpkg.com/history/umd/history.min.js`,
      `styles.css`
    ]),
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
