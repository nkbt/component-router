import test from 'tape';
import {store} from '../src/store';


test('store', t => {
  t.ok(store.dispatch instanceof Function, 'dispatch should be function');
  t.ok(store.subscribe instanceof Function, 'subscribe should be function');
  t.ok(store.getState instanceof Function, 'getState should be function');
  t.end();
});
