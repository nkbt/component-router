#!/usr/bin/env node
'use strict';


const {bash, CWD} = require('./utils/bash');


bash(`${require.resolve('webpack-dev-server')}
  --config ${require.resolve('./utils/webpack/dev.config.js')}`, {
  cwd: CWD,
  env: {NODE_ENV: 'development'}
});
