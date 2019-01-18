'use strict';


const {
  mode,
  pathTo,
  PACKAGE_NAME,
  COMPONENT_NAME,
  plugins,
  loaders,
  resolve,
  stats,
  externals
} = require('./common');


module.exports = {
  mode,
  devtool: false,
  entry: pathTo('index.mjs'),
  output: {
    filename: `${PACKAGE_NAME}.min.js`,
    path: pathTo('build'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  plugins: [
    plugins.loaderOptions
  ],
  module: {
    rules: [
      loaders.babel
    ]
  },
  resolve,
  stats,
  externals
};
