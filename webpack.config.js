var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var env = process.env.NODE_ENV || 'production';


var production = {
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
        NODE_ENV: '"' + env + '"'
      }
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: [path.resolve('src')]},
      {
        test: /\.css$/,
        loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true}
};


var development = {
  devtool: 'eval',

  entry: [
    './src/example/reset.css',
    './src/example/Example.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {filename: 'bundle.js', path: path.resolve('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'babel'], include: [path.resolve('src')]},
      {
        test: /\.css$/,
        loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ],
    preLoaders: [
      {test: /\.js$/, loaders: ['eslint'], include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  eslint: {configFile: 'src/.eslintrc'},
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


var build = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: require('./package.json').name + '.js',
    path: path.resolve('build'),
    library: 'ComponentRouter',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  externals: {
    flux: {
      root: 'Flux',
      commonjs2: 'flux',
      commonjs: 'flux',
      amd: 'flux'
    },
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }
};

if (process.env.BUILD) {
  module.exports = build;
} else if (env === 'production') {
  module.exports = production;
} else {
  module.exports = development;
}
