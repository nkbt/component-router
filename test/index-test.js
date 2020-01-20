const babel = require('@babel/register');

babel({
  babelrc: false,
  plugins: [
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-proposal-class-properties')
  ],
  presets: [
    require.resolve('@babel/preset-react'),
    [require.resolve('@babel/preset-env'), {
      targets: {
        node: '10'
      },
      modules: 'commonjs',
      loose: true
    }]
  ],
  retainLines: true,
  comments: false
});


require('./actions-test');
require('./location-test');
require('./reducer-test');
require('./sortedObject-test');
require('./adapters/hash-test');
require('./adapters/history-test');
require('./pathname/match-test');
require('./pathname/parse-test');
require('./pathname/render-test');
