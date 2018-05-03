import {test} from 'tape';
import {matchRoute} from './../../src/pathname/match';


const routes = {
  '/dossier': {regex: '^/dossier$', params: {}},
  '/dossier/:host': {regex: '^/dossier/([^/]+)$', params: {host: null}}
};


const matcher = matchRoute(routes);


test('Utils / router / matchRoute', t => {
  t.deepEquals(
    matcher(),
    {route: null, regex: null, params: {}},
    'should return empty route'
  );

  t.deepEquals(
    matcher('/'),
    {route: null, regex: null, params: {}},
    'should return empty route for unknown / route'
  );

  t.deepEquals(
    matcher('/some/very/deep/url'),
    {route: null, regex: null, params: {}},
    'should return empty route for unknown /some/very/deep/url route'
  );

  t.deepEquals(
    matcher('/dossier'),
    routes['/dossier'],
    'should return static route /dossier'
  );


  t.deepEquals(
    matcher('/dossier/321'),
    {...routes['/dossier/:host'], params: {host: '321'}},
    'should return /dossier/:host route with host = "321" param'
  );


  t.deepEquals(
    matcher('/dossier/d6bb%3A4fc8%3A86f9%3Add99%3A163d%3A7d86%3Afc64%3A5cec'),
    {...routes['/dossier/:host'], params: {host: 'd6bb:4fc8:86f9:dd99:163d:7d86:fc64:5cec'}},
    'should decode URL params'
  );

  t.end();
});
