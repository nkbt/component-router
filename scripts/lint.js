#!/usr/bin/env node
'use strict';


const {bash, CWD} = require('./utils/bash');

bash(`${require.resolve('eslint/bin/eslint')} . ${process.argv.slice(2).join(' ')}`, {cwd: CWD});
