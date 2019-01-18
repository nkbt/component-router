'use strict';


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const path = require('path');


const {NODE_ENV = 'development'} = process.env;


const pathTo = p => path.join(process.cwd(), p);
exports.pathTo = pathTo;


const {
  config: {
    component: COMPONENT_NAME,
    externals: COMPONENT_EXTERNALS = {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    include: INCLUDE_JS = [
      'https://unpkg.com/react/umd/react.production.min.js',
      'https://unpkg.com/react-dom/umd/react-dom.production.min.js'
    ]
  },
  name: PACKAGE_NAME
} = require(pathTo('package.json'));
exports.PACKAGE_NAME = PACKAGE_NAME;
exports.COMPONENT_NAME = COMPONENT_NAME;
exports.INCLUDE_JS = INCLUDE_JS;


if (!COMPONENT_NAME) {
  throw Error('<package.json>.config.component name is required');
}


exports.PACKAGE_NAME = PACKAGE_NAME;


exports.loaders = {
  css: {
    test: /\.css$/,
    use: [
      {loader: require.resolve('style-loader')},
      {loader: require.resolve('css-loader')}
    ]
  },
  babel: {
    test: /\.mjs$/,
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      presets: [
        require.resolve('@babel/preset-react'),
        [require.resolve('@babel/preset-env'), {
          targets: {browsers: ['defaults', 'not dead']},
          modules: false,
          loose: true
        }]
      ],
      plugins: [
        require.resolve('@babel/plugin-proposal-object-rest-spread'),
        require.resolve('@babel/plugin-proposal-class-properties')
      ],
      env: {
        production: {
          plugins: [
            [
              require.resolve('babel-plugin-transform-react-remove-prop-types'),
              {removeImport: true}
            ]
          ]
        }
      }
    }
  }
};


exports.plugins = {
  html: new HtmlWebpackPlugin(),
  include: assets => new HtmlWebpackIncludeAssetsPlugin({
    assets,
    append: false
  }),
  loaderOptions: new webpack.LoaderOptionsPlugin({
    minimize: true
  })
};


exports.resolve = {};


exports.stats = {colors: true};


exports.externals = COMPONENT_EXTERNALS;


exports.mode = NODE_ENV;
