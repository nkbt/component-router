import {test} from 'tape';
import {renderRoute} from './../../src/pathname/render';


test('Utils / router / renderRoute', t => {
  t.equals(
    renderRoute()(),
    '/',
    'should render empty route'
  );

  t.equals(
    renderRoute('/')(),
    '/',
    'should render /'
  );

  t.equals(
    renderRoute('/dossier')(),
    '/dossier',
    'should render static route /dossier'
  );

  t.equals(
    renderRoute('/some/very/deep/url')(),
    '/some/very/deep/url',
    'should render deep static route /some/very/deep/url'
  );

  t.equals(
    renderRoute('/dossier/:host')({host: 123}),
    '/dossier/123',
    'should render /dossier/:host route with param :host = 123'
  );

  t.equals(
    renderRoute('/dossier/:host/:somethingElse')({host: 123, somethingElse: 456}),
    '/dossier/123/456',
    'should render route /dossier/:host/:somethingElse with multiple params'
  );

  t.throws(
    () => renderRoute('/dossier/:host')(),
    new RegExp('Param :host is not specified for route /dossier/:host'),
    'should throw on missing param'
  );

  t.end();
});
