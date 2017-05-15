#!/usr/bin/env node
'use strict';


const {npm, CWD} = require(`./lib/bash`);


npm(`webpack-dev-server --config ${require.resolve(`./lib/webpack/dev.config.js`)}`, {
  cwd: CWD,
  env: {NODE_ENV: `development`}
});
