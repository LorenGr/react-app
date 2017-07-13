import {combineReducers} from 'redux';
import items from './items';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

export const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    items: items
});