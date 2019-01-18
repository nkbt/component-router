import test from 'tape';
import {locationHash} from './hash';


test('locationHash', t => {
  t.ok(locationHash instanceof Function, 'should be function');
  t.end();
});
