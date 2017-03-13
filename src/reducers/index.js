import {combineReducers} from 'redux';
import emails from './emails';
import { routerReducer} from 'react-router-redux';

export const reducers = combineReducers({
    routing : routerReducer,
    emails: emails
});