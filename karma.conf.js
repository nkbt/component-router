'use strict';


var path = require('path');


var webpackConfig = {
  devtool: 'eval',

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'test')},
      {test: /\.js$/, loader: 'isparta', include: path.join(__dirname, 'src')}
    ]
  },

  stats: {
    colors: true
  }
};


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      'test/**/*.js'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true
    },
    exclude: [],
    preprocessors: {
      'test/**/*.js': ['webpack']
    },
    reporters: ['progress'],
    coverageReporter: process.env.CIRCLE_ARTIFACTS ? {
      reporters: [
        {type: 'lcovonly'},
        {
          type: 'html',
          subdir: '.',
          dir: process.env.CIRCLE_ARTIFACTS + '/coverage/'
        },
        {type: 'text'}
      ]
    } : {
      dir: './coverage/',
      subdir: '.',
      reporters: [
        {type: 'html'},
        {type: 'lcovonly'},
        {type: 'text', file: 'text.txt'},
        {type: 'text-summary', file: 'text-summary.txt'}
      ]
    },
    junitReporter: {
      outputFile: process.env.CIRCLE_TEST_REPORTS + '/karma.xml',
      suite: ''
    },
    captureTimeout: 90000,
    browserNoActivityTimeout: 60000,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
