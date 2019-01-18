#!/usr/bin/env node
'use strict';


const {bash, CWD} = require('./utils/bash');


bash(`${require.resolve('rimraf/bin')} build`, {cwd: CWD});
bash(`${require.resolve('webpack-cli')} --config ${require.resolve('./utils/webpack/dist.config.js')}`, {
  cwd: CWD,
  env: {NODE_ENV: 'production'}
});
bash(`${require.resolve('webpack-cli')} --config ${require.resolve('./utils/webpack/min.config.js')}`, {
  cwd: CWD,
  env: {NODE_ENV: 'production'}
});
