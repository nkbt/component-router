import test from 'tape';
import {reducer} from '../src/reducer';
import Constants from '../src/Constants';

test('reducer', t => {
  t.ok(reducer instanceof Function, 'should be function');
  t.end();
});


test('reducer / Init', t => {
  t.deepEqual(reducer(undefined, {}).query, {},
    'should initialize with empty query');

  t.deepEqual(reducer(undefined, {}).query, {},
    'should initialize with empty cleanQuery');


  t.deepEqual(reducer(undefined, {}).defaultParams, {},
    'should initialize with empty defaultParams');

  t.end();
});


test('reducer / Restore location', t => {
  const action = {
    type: Constants.RESTORE_LOCATION,
    payload: {location: '/hello?world=123&name=barry'}
  };

  t.deepEqual(reducer(undefined, action).query,
    {world: '123', name: 'barry'},
    'should restore query from location');

  t.deepEqual(Object.keys(reducer(undefined, action).query),
    ['name', 'world'],
    'should sort query params alphabetically when restoring location');

  t.end();
});


test('reducer / Default params', t => {
  const prepare = () => {
    let state = reducer(undefined, {
      type: Constants.RESTORE_LOCATION,
      payload: {location: '/?x=1'}
    });

    state = reducer(state, {
      type: Constants.ADD_DEFAULT_PARAM,
      payload: {namespace: 'z', value: 100}
    });
    state = reducer(state, {
      type: Constants.ADD_DEFAULT_PARAM,
      payload: {namespace: 'y', value: 10}
    });
    return state;
  };

  t.deepEqual(prepare().defaultParams,
    {y: '10', z: '100'},
    'should add default params');

  t.deepEqual(prepare().query,
    {x: '1', y: '10', z: '100'},
    'should merge current query with default params');

  t.deepEqual(
    reducer(prepare(), {
      type: Constants.ADD_DEFAULT_PARAM, payload: {namespace: 'x', value: 123}
    }).query,
    {x: '1', y: '10', z: '100'},
    'should not override existing query param with default one');

  t.deepEqual(
    Object.keys(reducer(prepare(), {
      type: Constants.ADD_DEFAULT_PARAM,
      payload: {namespace: 'a', value: 0}
    }).query),
    ['a', 'x', 'y', 'z'],
    'should sort query params when adding default ones');

  t.end();
});


test('reducer / Remove param', t => {
  const prepare = () => {
    let state = reducer(undefined, {
      type: Constants.RESTORE_LOCATION,
      payload: {location: '/?x=1&y=10'}
    });

    state = reducer(state, {
      type: Constants.ADD_DEFAULT_PARAM,
      payload: {namespace: 'z', value: 100}
    });
    return state;
  };

  t.deepEqual(
    reducer(prepare(), {type: Constants.REMOVE_PARAM, payload: {namespace: 'x'}}).query,
    {y: '10', z: '100'},
    'should remove param from query');

  t.deepEqual(
    reducer(prepare(), {type: Constants.REMOVE_PARAM, payload: {namespace: 'z'}}).defaultParams,
    {},
    'should remove param from default params');

  t.deepEqual(
    Object.keys(reducer(prepare(), {
      type: Constants.REMOVE_PARAM, payload: {namespace: 'x'}
    }).query),
    ['y', 'z'],
    'should keep query sorted upon removal');

  t.end();
});


test('reducer / Navigate to', t => {
  const prepare = () => {
    return reducer(undefined, {
      type: Constants.ADD_DEFAULT_PARAM,
      payload: {namespace: 'y', value: 2}
    });
  };

  t.deepEqual(
    reducer(prepare(), {type: Constants.NAVIGATE_TO, payload: {query: {x: 0}}}).query,
    {x: '0', y: '2'},
    'should merge query params');

  t.deepEqual(
    reducer(prepare(), {type: Constants.NAVIGATE_TO, payload: {query: {y: 10}}}).query,
    {y: '10'},
    'should override existing query params');

  t.deepEqual(
    Object.keys(reducer(prepare(), {
      type: Constants.NAVIGATE_TO, payload: {query: {x: 0, a: 'a'}}
    }).query),
    ['a', 'x', 'y'],
    'should sort query params');

  t.end();
});
