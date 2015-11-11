import test from 'tape';
import {href, isActive} from '../src/href';


test('href', t => {
  t.ok(href instanceof Function, 'should be function');
  t.end();
});


test('href / isActive', t => {
  t.ok(isActive instanceof Function, 'should be function');
  t.end();
});
