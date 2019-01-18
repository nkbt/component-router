#!/usr/bin/env node
'use strict';


const {bash, CWD} = require('./utils/bash');


bash(`${require.resolve('rimraf/bin')} pub`, {cwd: CWD});
bash(`${require.resolve('webpack-cli')} --config ${require.resolve('./utils/webpack/pub.config.js')}`, {
  cwd: CWD,
  env: {NODE_ENV: 'production'}
});
