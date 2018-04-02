import axios from 'axios';

// export const fetchUser = () =>
//     async dispatch => {
//         console.log(this.props)
//         // const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Chennai&APPID=a44e37bfe521db4bf31b0b57918362bf');
//         // console.log(res)
//         // dispatch({ type: 'FETCH_USER', payload: res.data });
//     };

export function fetchCity(city){
    debugger
    return {
        type: 'FETCH_CITY',
        payload: city
    }
}