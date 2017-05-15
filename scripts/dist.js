#!/usr/bin/env node
'use strict';


const {npm, CWD} = require(`./lib/bash`);


npm(`rimraf build`, {cwd: CWD});
npm(`webpack --config ${require.resolve(`./lib/webpack/dist.config.js`)}`, {
  cwd: CWD,
  env: {NODE_ENV: `production`}
});
npm(`webpack --config ${require.resolve(`./lib/webpack/min.config.js`)}`, {
  cwd: CWD,
  env: {NODE_ENV: `production`}
});
