import {combineReducers} from 'redux';
import emails from './emails';

export const reducers = combineReducers({
    emails: emails
});