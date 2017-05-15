#!/usr/bin/env node
'use strict';


const path = require(`path`);
const glob = require(`glob`);
const {CWD} = require(`./lib/bash`);


require(`babel-register`)({
  babelrc: false,
  presets: [`node7`, `react`],
  retainLines: true,
  comments: false
});


glob
  .sync(`**/*-test.js`, {
    realpath: true,
    cwd: path.resolve(CWD, `test`)
  })
  .forEach(require);
