import history from 'history';
import {location} from '../location';
import {LOCATION_HASH} from '../actions';

const {createHashHistory} = history;
export const locationHash = location(createHashHistory, LOCATION_HASH);
