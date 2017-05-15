import test from 'tape';
import * as actions from '../src/actions';
import {
  ADD_DEFAULT_PARAM,
  REMOVE_PARAM,
  NAVIGATE_TO,
  RESTORE_LOCATION
} from '../src/constants';


test('actions', t => {
  t.deepEqual(
    actions.navigateTo({query: {some: 'thing'}}),
    {
      type: NAVIGATE_TO,
      pathname: undefined,
      query: {some: 'thing'}
    },
    'should return a NAVIGATE_TO action'
  );

  t.deepEqual(
    actions.addDefaultParam('namespace', 'value'),
    {type: ADD_DEFAULT_PARAM, namespace: 'namespace', value: 'value'},
    'should return an ADD_DEFAULT_PARAM action'
  );

  t.deepEqual(
    actions.removeParam('param'),
    {type: REMOVE_PARAM, namespace: 'param'},
    'should return a REMOVE_PARAM action'
  );

  t.deepEqual(
    actions.restoreLocation({query: {}}),
    {
      type: RESTORE_LOCATION,
      pathname: undefined,
      query: {},
      hash: undefined,
      locationType: undefined
    },
    'should return an appropriate RESTORE_LOCATION action'
  );

  t.end();
});
