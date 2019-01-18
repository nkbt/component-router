import history from 'history';
import {location} from '../location';
import {LOCATION_HISTORY} from '../actions';

const {createBrowserHistory} = history;
export const locationHistory = location(createBrowserHistory, LOCATION_HISTORY);
