import test from 'tape';
import {initialState, restoreLocation, componentRouter, href, isActive} from '../src/reducer';
import {
  ADD_DEFAULT_PARAM,
  REMOVE_PARAM,
  NAVIGATE_TO,
  RESTORE_LOCATION
} from '../src/constants';

test('componentRouter', t => {
  t.ok(componentRouter instanceof Function, 'should be function');
  t.end();
});


test('componentRouter / Init', t => {
  t.deepEqual(
    componentRouter(undefined, {}).query, {},
    'should initialize with empty query'
  );

  t.deepEqual(
    componentRouter(undefined, {}).query, {},
    'should initialize with empty cleanQuery'
  );


  t.deepEqual(
    componentRouter(undefined, {}).defaultParams, {},
    'should initialize with empty defaultParams'
  );

  t.end();
});


test('componentRouter / Restore location', t => {
  t.deepEqual(
    restoreLocation(initialState, {query: {world: '123', name: 'barry'}}).query,
    {world: '123', name: 'barry'},
    'should restore query from location'
  );

  t.deepEqual(
    Object.keys(restoreLocation(initialState, {query: {world: '123', name: 'barry'}}).query),
    ['name', 'world'],
    'should sort query params alphabetically when restoring location'
  );

  const state = restoreLocation(initialState, {query: {world: '123', name: 'barry'}});

  t.deepEqual(
    restoreLocation(state, {query: {something: 'else'}}).query,
    {something: 'else'},
    'should override query upon restore'
  );

  t.end();
});


test('componentRouter / Default params', t => {
  const prepare = () => {
    let state = componentRouter(undefined, {
      type: RESTORE_LOCATION,
      query: {x: 1}
    });

    state = componentRouter(state, {
      type: ADD_DEFAULT_PARAM,
      namespace: 'z',
      value: 100
    });
    state = componentRouter(state, {
      type: ADD_DEFAULT_PARAM,
      namespace: 'y',
      value: 10
    });
    return state;
  };

  t.deepEqual(
    prepare().defaultParams,
    {y: '10', z: '100'},
    'should add default params'
  );

  t.deepEqual(
    prepare().query,
    {x: '1', y: '10', z: '100'},
    'should merge current query with default params'
  );

  t.deepEqual(
    componentRouter(prepare(), {
      type: ADD_DEFAULT_PARAM,
      namespace: 'x',
      value: 123
    }).query,
    {x: '1', y: '10', z: '100'},
    'should not override existing query param with default one'
  );

  t.deepEqual(
    Object.keys(componentRouter(prepare(), {
      type: ADD_DEFAULT_PARAM,
      namespace: 'a',
      value: 0
    }).query),
    ['a', 'x', 'y', 'z'],
    'should sort query params when adding default ones'
  );

  t.end();
});


test('componentRouter / Remove param', t => {
  const prepare = () => {
    let state = componentRouter(undefined, {
      type: RESTORE_LOCATION,
      query: {x: 1, y: 10}
    });

    state = componentRouter(state, {
      type: ADD_DEFAULT_PARAM,
      namespace: 'z',
      value: 100
    });
    return state;
  };

  t.deepEqual(
    componentRouter(prepare(), {type: REMOVE_PARAM, namespace: 'x'}).query,
    {y: '10', z: '100'},
    'should remove param from query'
  );

  t.deepEqual(
    componentRouter(prepare(), {
      type: REMOVE_PARAM, namespace: 'z'
    }).defaultParams,
    {},
    'should remove param from default params'
  );

  t.deepEqual(
    Object.keys(componentRouter(prepare(), {
      type: REMOVE_PARAM, namespace: 'x'
    }).query),
    ['y', 'z'],
    'should keep query sorted upon removal'
  );

  t.end();
});


test('componentRouter / Navigate to', t => {
  const prepare = () => componentRouter(undefined, {
    type: ADD_DEFAULT_PARAM,
    namespace: 'y',
    value: 2
  });

  t.deepEqual(
    componentRouter(prepare(), {type: NAVIGATE_TO, query: {x: 0}}).query,
    {x: '0', y: '2'},
    'should merge query params'
  );

  t.deepEqual(
    componentRouter(prepare(), {type: NAVIGATE_TO, query: {y: 10}}).query,
    {y: '10'},
    'should override existing query params'
  );

  t.deepEqual(
    Object.keys(componentRouter(prepare(), {
      type: NAVIGATE_TO, query: {x: 0, a: 'a'}
    }).query),
    ['a', 'x', 'y'],
    'should sort query params'
  );

  t.end();
});


test('componentRouter / href', t => {
  t.ok(href instanceof Function, 'should be function');
  t.end();
});


test('componentRouter / isActive', t => {
  t.ok(isActive instanceof Function, 'should be function');
  t.end();
});
