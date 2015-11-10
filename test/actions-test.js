import test from 'tape';
import * as actions from '../src/actions';
import Constants from '../src/Constants';

test('actions', t => {
  t.deepEqual(
    actions.navigateTo({some: 'thing'}),
    {type: Constants.NAVIGATE_TO, payload: {query: {some: 'thing'}}},
    'should return a NAVIGATE_TO action'
  );

  t.deepEqual(
    actions.addDefaultParam('namespace', 'value'),
    {type: Constants.ADD_DEFAULT_PARAM, payload: {namespace: 'namespace', value: 'value'}},
    'should return an ADD_DEFAULT_PARAM action'
  );

  t.deepEqual(
    actions.removeParam('param'),
    {type: Constants.REMOVE_PARAM, payload: {namespace: 'param'}},
    'should return a REMOVE_PARAM action'
  );

  t.deepEqual(
    actions.restoreLocation({search: ''}),
    {
      type: Constants.RESTORE_LOCATION,
      payload: {
        location: {pathname: undefined, search: '', hash: undefined},
        locationType: undefined
      }
    },
    'should return an appropriate RESTORE_LOCATION action'
  );

  t.end();
});
