import * as allActions from './actions';


export * from './actions';
export {componentRouter, href, isActive} from './reducer';
export {location} from './location';
export {locationHash} from './adapters/hash';
export {locationHistory} from './adapters/history';
export {locationNode} from './adapters/node';


// For backward compatibility
export const actions = allActions;
export const Constants = allActions;
