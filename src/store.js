import {createStore} from 'redux';
import {componentRouter} from './reducer';


export const store = createStore(componentRouter);
