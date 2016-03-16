import createHistory from 'history/lib/createBrowserHistory';
import {location} from './../location';
import Constants from './../Constants';

export const locationHistory = location(createHistory, Constants.LOCATION_HISTORY);
