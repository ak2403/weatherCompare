import { combineReducers } from 'redux';
import asyncReducer from './asyncReducer';

export default combineReducers({
    cities: asyncReducer
});