#!/usr/bin/env node
'use strict';


const {bash, CWD} = require('./utils/bash');


const opts = {cwd: CWD, env: {NODE_ENV: 'test'}};


bash(`node --experimental-modules ./location-test.mjs`, opts);
bash(`node --experimental-modules ./reducer-test.mjs`, opts);
bash(`node --experimental-modules ./actions-test.mjs`, opts);
bash(`node --experimental-modules ./adapters/history-test.mjs`, opts);
bash(`node --experimental-modules ./adapters/hash-test.mjs`, opts);
bash(`node --experimental-modules ./sortedObject-test.mjs`, opts);
bash(`node --experimental-modules ./pathname/parse-test.mjs`, opts);
bash(`node --experimental-modules ./pathname/render-test.mjs`, opts);
bash(`node --experimental-modules ./pathname/match-test.mjs`, opts);
