import { FETCH_CITY } from './types';

export default function(state = null, action){
    switch(action.type){
        case FETCH_CITY:
            let selectedState = {
                selectedCity: action.selectedCity,
                weatherList: action.weatherList
            };
            return selectedState;

        default:
            return state;
    }
}