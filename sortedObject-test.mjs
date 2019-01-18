import test from 'tape';
import sortedObject from './sortedObject';


test('sortedObject', t => {
  t.ok(sortedObject instanceof Function, 'should be function');
  t.end();
});
