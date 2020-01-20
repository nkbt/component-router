import {createHashHistory} from 'history';
import {location} from '../location';
import {LOCATION_HASH} from '../constants';


export const locationHash = location(createHashHistory, LOCATION_HASH);
