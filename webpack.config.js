'use strict';


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const COMPONENT_NAME = process.env.npm_package_config_component;
const pathTo = path.join.bind(null, process.cwd());


if (!COMPONENT_NAME) {
  throw Error('<package.json>.config.component name is required');
}


const loaders = [
  {
    test: /\.css$/,
    loader: 'style!css?sourceMap&modules&localIdentName=[path][name]---[local]',
    include: [pathTo('src', 'example')]
  },
  {test: /\.json$/, loader: 'json'},
  {
    test: /\.js$/,
    loader: 'babel',
    include: [pathTo('src')]
  }
];


const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
});


const resolve = {extensions: ['', '.js']};
const stats = {colors: true};


const development = {
  devtool: '#source-map',

  entry: [
    pathTo('src', 'example', 'Example.js'),
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {filename: 'bundle.js', path: pathTo('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    definePlugin
  ],
  module: {
    loaders,
    preLoaders: [
      {test: /\.js$/, loader: 'eslint', include: [pathTo('src')]}
    ]
  },
  resolve,
  stats,
  devServer: {
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};


const ghPages = {
  devtool: '#source-map',
  entry: pathTo('src', 'example', 'Example.js'),
  output: {filename: 'bundle.js', path: pathTo('example')},
  plugins: [new HtmlWebpackPlugin(), definePlugin],
  module: {loaders},
  resolve,
  stats
};


const dist = {
  devtool: '#source-map',
  entry: pathTo('src', 'index.js'),
  output: {
    filename: `${require(pathTo('package.json')).name}.js`,
    path: pathTo('build'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  plugins: [definePlugin],
  module: {loaders},
  resolve,
  stats,
  externals: {
    react: {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'},
    history: {root: 'History', commonjs2: 'history', commonjs: 'history', amd: 'history'},
    qs: {root: 'Qs', commonjs2: 'qs', commonjs: 'qs', amd: 'qs'},
    redux: {root: 'Redux', commonjs2: 'redux', commonjs: 'redux', amd: 'redux'}
  }
};


const min = {
  devtool: '#source-map',
  entry: pathTo('src', 'index.js'),
  output: {
    filename: `${require(pathTo('package.json')).name}.min.js`,
    path: pathTo('build'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  plugins: [
    definePlugin,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {loaders},
  resolve,
  stats,
  externals: {
    history: {root: 'History', commonjs2: 'history', commonjs: 'history', amd: 'history'},
    qs: {root: 'Qs', commonjs2: 'qs', commonjs: 'qs', amd: 'qs'},
    redux: {root: 'Redux', commonjs2: 'redux', commonjs: 'redux', amd: 'redux'}
  }
};


const test = {
  output: {libraryTarget: 'commonjs2'},
  module: {loaders}
};


const configs = {development, ghPages, dist, min, test};
const build = process.env.BUILD || process.env.NODE_ENV || 'development';


module.exports = configs[build];
