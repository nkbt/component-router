#!/usr/bin/env node
'use strict';


const nightwatchAutorun = require(`nightwatch-autorun`);
const webpack = require(`webpack`);
const WebpackDevServer = require(`webpack-dev-server`);


const {npm, CWD} = require(`./lib/bash`);
const {output_folder: REPORT_DIR} = require(`./lib/nightwatch.json`);
const webpackConfig = require(`./lib/webpack/dev.config.js`);


npm(`rimraf reports/e2e`, {cwd: CWD});
nightwatchAutorun({
  server: new WebpackDevServer(webpack(webpackConfig)),
  nightwatchConfig: require.resolve(`./lib/nightwatch.json`),
  reportDir: REPORT_DIR,
  logDir: REPORT_DIR
});
