import test from 'tape';
import sortedObject from '../src/sortedObject';


test('sortedObject', t => {
  t.ok(sortedObject instanceof Function, 'should be function');
  t.end();
});
