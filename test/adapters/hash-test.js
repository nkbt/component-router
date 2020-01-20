import test from 'tape';
import {locationHash} from '../../src/adapters/hash';


test('locationHash', t => {
  t.ok(locationHash instanceof Function, 'should be function');
  t.end();
});
