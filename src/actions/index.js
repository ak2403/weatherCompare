import axios from 'axios';
import { FETCH_CITY, FETCH_SECONDARY_CITY } from './types';

export const fetchCity = (details) => {
    return function (dispatch) {
        axios.all([
            axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + details.city + '&units=metric&APPID=a44e37bfe521db4bf31b0b57918362bf'),
            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + details.city + '&APPID=a44e37bfe521db4bf31b0b57918362bf')
        ])
            .then(axios.spread(function (selectedCity, weatherList) {
                dispatch({ type: FETCH_CITY, selectedCity: selectedCity.data, weatherList: weatherList.data });
            }));
    }
}

export const fetchSecondaryCity = (details) => {
    return function (dispatch) {
        axios.all([
            axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + details.city + '&units=metric&APPID=a44e37bfe521db4bf31b0b57918362bf'),
            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + details.city + '&APPID=a44e37bfe521db4bf31b0b57918362bf')
        ])
            .then(axios.spread(function (selectedCity, weatherList) {
                dispatch({ type: FETCH_SECONDARY_CITY, selectedCity: selectedCity.data, weatherList: weatherList.data });
            }));
    }
}