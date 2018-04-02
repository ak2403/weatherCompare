import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
    dash: dashboardReducer
});