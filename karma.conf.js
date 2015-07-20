'use strict';


var path = require('path');


var preLoaders = process.env.COVERAGE ?
  [
    {test: /\.js$/, loader: 'babel', include: [path.resolve('test')]},
    {test: /\.js$/, loader: 'isparta', include: [path.resolve('src')]}
  ] :
  [
    {test: /\.js$/, loader: 'babel', include: [path.resolve('src'), path.resolve('test')]}
  ];


var coverageDir = path.resolve(path.join(process.env.CIRCLE_ARTIFACTS || './reports', 'coverage'));


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      'test/utils/mockedWindow.js',
      'test/index.js'
    ],
    webpack: {
      devtool: 'eval',
      resolve: {
        extensions: ['', '.js']
      },
      module: {preLoaders: preLoaders},
      stats: {colors: true}
    },
    webpackMiddleware: {
      quiet: true
    },
    exclude: [],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    reporters: ['progress'],
    junitReporter: {
      outputDir: path.resolve(process.env.CIRCLE_TEST_REPORTS || './reports'),
      suite: ''
    },
    coverageReporter: {
      dir: coverageDir,
      subdir: '.',
      reporters: [
        {type: 'html'},
        {type: 'lcovonly'},
        {type: 'text'},
        {type: 'text-summary', file: 'text-summary.txt'}
      ]
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
