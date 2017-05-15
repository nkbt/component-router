#!/usr/bin/env node
'use strict';


require(`./${process.argv[2] || `dev`}`);
