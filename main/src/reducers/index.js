import { combineReducers } from 'redux';
import asyncReducer from './asyncReducer';
import secondaryReducer from './secondaryReducer';

export default combineReducers({
    cities: asyncReducer,
    secondaryCities: secondaryReducer
});