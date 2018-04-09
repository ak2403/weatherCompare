import { FETCH_SECONDARY_CITY } from './types';

export default function(state = null, action){
    switch(action.type){
        case FETCH_SECONDARY_CITY:
            let selectedState = {
                selectedCity: action.selectedCity,
                weatherList: action.weatherList
            };
            return selectedState;

        default:
            return state;
    }
}