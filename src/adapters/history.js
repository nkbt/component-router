import {createBrowserHistory} from 'history';
import {location} from './../location';
import {LOCATION_HISTORY} from './../constants';


export const locationHistory = location(createBrowserHistory, LOCATION_HISTORY);
