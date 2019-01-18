import test from 'tape';
import {location} from './location';


test('location', t => {
  t.ok(location instanceof Function, 'should be function');
  t.end();
});
