import {createHistory} from 'history';
import {location} from './../location';
import {LOCATION_HISTORY} from './../constants';


export const locationHistory = location(createHistory, LOCATION_HISTORY);
