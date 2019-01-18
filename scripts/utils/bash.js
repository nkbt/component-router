'use strict';


const {execSync} = require('child_process');


const {NODE_DEBUG = ''} = process.env;
const isDebug = NODE_DEBUG.split(',').indexOf('bash') >= 0;


const CWD = process.cwd();
exports.CWD = CWD;


const debug = (...args) => isDebug && console.log(...args);


const clean = str => str.replace(/\s+/g, ' ').trim();
exports.clean = clean;


const bash = (cmd, options = {}) => {
  const cleanCmd = clean(cmd);
  debug('>>', cleanCmd);
  const result = execSync(cleanCmd, Object.assign(
    {stdio: 'inherit'},
    options,
    {env: Object.assign({}, process.env, options.env)}
  ));
  const stringResult = result ? result.toString().trim() : '';
  debug('<<', stringResult);
  return stringResult;
};
exports.bash = bash;
