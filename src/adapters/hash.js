import createHistory from 'history/lib/createHashHistory';
import {location} from './../location';
import Constants from './../Constants';

export const locationHash = location(createHistory, Constants.LOCATION_HASH);
