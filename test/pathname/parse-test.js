import {test} from 'tape';
import {parseRoute} from '../../src/pathname/parse';


test('Utils / router / parseRoute', t => {
  t.deepEquals(
    parseRoute(),
    {route: '/', regex: '^/$', params: {}},
    'should parse empty route'
  );

  t.deepEquals(
    parseRoute('/'),
    {route: '/', regex: '^/$', params: {}},
    'should parse /'
  );

  t.deepEquals(
    parseRoute('/dossier'),
    {route: '/dossier', regex: '^/dossier/*$', params: {}},
    'should parse static route /dossier'
  );

  t.deepEquals(
    parseRoute('/some/very/deep/url'),
    {route: '/some/very/deep/url', regex: '^/some/very/deep/url/*$', params: {}},
    'should parse deep static route /some/very/deep/url'
  );

  t.deepEquals(
    parseRoute('/dossier/:host'),
    {route: '/dossier/:host', regex: '^/dossier/([^/]+)/*$', params: {host: null}},
    'should parse route with param /dossier/:host'
  );

  t.deepEquals(
    parseRoute('/dossier/:host/:somethingElse'),
    {
      route: '/dossier/:host/:somethingElse',
      regex: '^/dossier/([^/]+)/([^/]+)/*$',
      params: {host: null, somethingElse: null}
    },
    'should parse route with multiple params /dossier/:host/:somethingElse'
  );

  t.deepEquals(
    parseRoute('/I-am-dashed/:with~tilde/o\\uch'),
    {
      route: '/I-am-dashed/:with~tilde/o\\uch',
      regex: '^/I-am-dashed/([^/]+)/o\\\\uch/*$',
      params: {'with~tilde': null}
    },
    'should parse route with awkward parts /I-am-dashed/:with~tilde/o\\uch'
  );

  t.end();
});
