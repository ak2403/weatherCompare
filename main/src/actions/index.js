import axios from 'axios';
import { FETCH_CITY } from './types';

export const fetchCity = (details) => {
    return async (dispatch) => {
        const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ details.city +'&units=metric&APPID=a44e37bfe521db4bf31b0b57918362bf');
        dispatch({ type: FETCH_CITY, payload: res.data });
    }
}