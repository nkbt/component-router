import test from 'tape';
import {location, url} from '../src/location';


test('location', t => {
  t.ok(location instanceof Function, 'should be function');
  t.end();
});


test('location / url', t => {
  t.ok(url instanceof Function, 'should be function');
  t.end();
});
