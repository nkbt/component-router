describe('Reducer', () => {
  const ReducerInjector = require('inject!../src/Reducer');
  const sortedObject = require('../src/sortedObject');

  let sorted, Constants, Reducer;


  beforeEach(() => {
    Constants = {};
    Constants.NAVIGATE_TO = 0;
    Constants.ADD_DEFAULT_PARAM = 1;
    Constants.REMOVE_PARAM = 2;
    Constants.RESTORE_LOCATION = 3;

    sorted = jasmine.createSpy('sortedObject').and.callFake(sortedObject);
  });


  const createReducer = () => {
    Reducer = ReducerInjector({
      './sortedObject': sorted,
      './Constants': Constants
    });
  };


  describe('Init', () => {
    it('should initialize with default query', () => {
      createReducer();
      const initState = Reducer(undefined, {});

      expect(initState.query).toEqual({});
    });


    it('should have no default params', () => {
      createReducer();
      const initState = Reducer(undefined, {});

      expect(initState.defaultParams).toEqual({});
    });
  });


  describe('Restore location', () => {
    let action, newState;

    beforeEach(() => {
      createReducer();
      action = {
        type: Constants.RESTORE_LOCATION,
        payload: {location: '/hello?world=123&name=barry'}

      };
      newState = Reducer(undefined, action);
    });


    it('should restore location', () => {
      expect(newState.query).toEqual({world: '123', name: 'barry'});
    });


    it('should sort query params when restoring location', () => {
      expect(sorted.calls.mostRecent().args).toEqual([{world: '123', name: 'barry'}]);
      expect(Object.keys(newState.query)).toEqual(['name', 'world']);
    });
  });


  describe('Default params', () => {
    let newState;

    beforeEach(() => {
      createReducer();
      let state;

      state = Reducer(state, {
        type: Constants.RESTORE_LOCATION,
        payload: {location: '/?x=1'}
      });
      state = Reducer(state, {
        type: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'y', value: 10}
      });
      state = Reducer(state, {
        type: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'z', value: 100}
      });
      newState = state;
    });


    it('should add default params', () => {
      expect(newState.defaultParams).toEqual({y: '10', z: '100'});
    });


    it('should merge current query with default params', () => {
      expect(newState.query).toEqual({x: '1', y: '10', z: '100'});
    });


    it('should not override existing query param with default one', () => {
      newState = Reducer(newState, {
        type: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'x', value: 123}
      });
      expect(newState.query).toEqual({x: '1', y: '10', z: '100'});
    });


    it('should sort query params when adding default one', () => {
      expect(sorted.calls.mostRecent().args).toEqual([{x: '1', y: '10', z: '100'}]);
      expect(Object.keys(newState.query)).toEqual(['x', 'y', 'z']);
    });
  });


  describe('Remove param', () => {
    let newState;

    beforeEach(() => {
      createReducer();
      let state;

      state = Reducer(state, {
        type: Constants.RESTORE_LOCATION,
        payload: {location: '/?x=1&y=10'}
      });
      state = Reducer(state, {
        type: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'z', value: 100}
      });
      newState = state;
    });


    it('should remove param from query', () => {
      expect(newState.query).toEqual({x: '1', y: '10', z: '100'});
      newState = Reducer(newState, {
        type: Constants.REMOVE_PARAM,
        payload: {namespace: 'x'}
      });
      expect(newState.query).toEqual({y: '10', z: '100'});
    });


    it('should remove param from default params', () => {
      expect(newState.defaultParams).toEqual({z: '100'});
      newState = Reducer(newState, {
        type: Constants.REMOVE_PARAM,
        payload: {namespace: 'z'}
      });
      expect(newState.defaultParams).toEqual({});
    });


    it('should sort query params upon removal', () => {
      newState = Reducer(newState, {
        type: Constants.REMOVE_PARAM,
        payload: {namespace: 'x'}
      });
      expect(sorted.calls.mostRecent().args).toEqual([{y: '10', z: '100'}]);
      expect(Object.keys(newState.query)).toEqual(['y', 'z']);
    });
  });


  describe('Navigate to', () => {
    let newState;

    beforeEach(() => {
      createReducer();
      newState = Reducer(newState, {
        type: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'y', value: 2}
      });
    });


    it('should merge params', () => {
      newState = Reducer(newState, {
        type: Constants.NAVIGATE_TO,
        payload: {query: {y: 10}}
      });
      expect(newState.query).toEqual({y: '10'});
    });


    it('should sort query params', () => {
      newState = Reducer(newState, {
        type: Constants.NAVIGATE_TO,
        payload: {query: {y: 10}}
      });
      expect(sorted.calls.mostRecent().args).toEqual([{y: '10'}]);
      expect(Object.keys(newState.query)).toEqual(['y']);
    });
  });
});
