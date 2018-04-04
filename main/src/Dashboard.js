import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Detailscomponent from './components/detailsComponent';
import Chartcomponent from './components/chartComponent';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: ''
        };
        this.populateCity = this.populateCity.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick = () => {
        this.props.fetchCity({ city: this.state.selectedCity.name });
    }

    populateCity = () => {
        const google = window.google,
            state = this;

        let options = {
            types: ['geocode'],
            state: this
        },
            place;

        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchTextField'), options);

        autocomplete.addListener('place_changed', () => {
            place = autocomplete.getPlace();
            this.state.selectedCity = place;
        });
    }


    render() {
        this.props = {
            cities: ''
        }
        this.props.cities = {
            "selectedCity": {
                "coord": {
                    "lon": 80.28,
                    "lat": 13.09
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "base": "stations",
                "main": {
                    "temp": 34,
                    "pressure": 1007,
                    "humidity": 56,
                    "temp_min": 34,
                    "temp_max": 34
                },
                "visibility": 10000,
                "wind": {
                    "speed": 3.6,
                    "deg": 120,
                    "gust": 8.7
                },
                "clouds": {
                    "all": 0
                },
                "dt": 1522828800,
                "sys": {
                    "type": 1,
                    "id": 7834,
                    "message": 0.005,
                    "country": "IN",
                    "sunrise": 1522801986,
                    "sunset": 1522846243
                },
                "id": 1264527,
                "name": "Chennai",
                "cod": 200
            },
            "weatherList": {
                "cod": "200",
                "message": 0.0164,
                "cnt": 37,
                "list": [{
                    "dt": 1522832400,
                    "main": {
                        "temp": 307.06,
                        "temp_min": 304.045,
                        "temp_max": 307.06,
                        "pressure": 1018.4,
                        "sea_level": 1019.06,
                        "grnd_level": 1018.4,
                        "humidity": 82,
                        "temp_kf": 3.02
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.86,
                        "deg": 159.503
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-04 09:00:00"
                }, {
                    "dt": 1522843200,
                    "main": {
                        "temp": 305.59,
                        "temp_min": 303.324,
                        "temp_max": 305.59,
                        "pressure": 1018.06,
                        "sea_level": 1018.66,
                        "grnd_level": 1018.06,
                        "humidity": 82,
                        "temp_kf": 2.26
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.57,
                        "deg": 148.004
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-04 12:00:00"
                }, {
                    "dt": 1522854000,
                    "main": {
                        "temp": 303.1,
                        "temp_min": 301.597,
                        "temp_max": 303.1,
                        "pressure": 1019.57,
                        "sea_level": 1020.21,
                        "grnd_level": 1019.57,
                        "humidity": 92,
                        "temp_kf": 1.51
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.76,
                        "deg": 149.006
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-04 15:00:00"
                }, {
                    "dt": 1522864800,
                    "main": {
                        "temp": 301.74,
                        "temp_min": 300.984,
                        "temp_max": 301.74,
                        "pressure": 1020.07,
                        "sea_level": 1020.76,
                        "grnd_level": 1020.07,
                        "humidity": 97,
                        "temp_kf": 0.75
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.91,
                        "deg": 159
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-04 18:00:00"
                }, {
                    "dt": 1522875600,
                    "main": {
                        "temp": 300.17,
                        "temp_min": 300.17,
                        "temp_max": 300.17,
                        "pressure": 1018.62,
                        "sea_level": 1019.41,
                        "grnd_level": 1018.62,
                        "humidity": 100,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.06,
                        "deg": 170.501
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-04 21:00:00"
                }, {
                    "dt": 1522886400,
                    "main": {
                        "temp": 299.768,
                        "temp_min": 299.768,
                        "temp_max": 299.768,
                        "pressure": 1019.04,
                        "sea_level": 1019.67,
                        "grnd_level": 1019.04,
                        "humidity": 100,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.51,
                        "deg": 190.504
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-05 00:00:00"
                }, {
                    "dt": 1522897200,
                    "main": {
                        "temp": 301.542,
                        "temp_min": 301.542,
                        "temp_max": 301.542,
                        "pressure": 1020.81,
                        "sea_level": 1021.45,
                        "grnd_level": 1020.81,
                        "humidity": 95,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.86,
                        "deg": 198.003
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-05 03:00:00"
                }, {
                    "dt": 1522908000,
                    "main": {
                        "temp": 303.297,
                        "temp_min": 303.297,
                        "temp_max": 303.297,
                        "pressure": 1020.57,
                        "sea_level": 1021.13,
                        "grnd_level": 1020.57,
                        "humidity": 88,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.15,
                        "deg": 172.5
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-05 06:00:00"
                }, {
                    "dt": 1522918800,
                    "main": {
                        "temp": 303.641,
                        "temp_min": 303.641,
                        "temp_max": 303.641,
                        "pressure": 1018.08,
                        "sea_level": 1018.65,
                        "grnd_level": 1018.08,
                        "humidity": 83,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.66,
                        "deg": 153.5
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-05 09:00:00"
                }, {
                    "dt": 1522929600,
                    "main": {
                        "temp": 302.865,
                        "temp_min": 302.865,
                        "temp_max": 302.865,
                        "pressure": 1017.65,
                        "sea_level": 1018.19,
                        "grnd_level": 1017.65,
                        "humidity": 86,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 5.06,
                        "deg": 155.001
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-05 12:00:00"
                }, {
                    "dt": 1522940400,
                    "main": {
                        "temp": 301.651,
                        "temp_min": 301.651,
                        "temp_max": 301.651,
                        "pressure": 1019.49,
                        "sea_level": 1020.14,
                        "grnd_level": 1019.49,
                        "humidity": 94,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }],
                    "clouds": {
                        "all": 12
                    },
                    "wind": {
                        "speed": 4.77,
                        "deg": 164.502
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-05 15:00:00"
                }, {
                    "dt": 1522951200,
                    "main": {
                        "temp": 301.234,
                        "temp_min": 301.234,
                        "temp_max": 301.234,
                        "pressure": 1020.26,
                        "sea_level": 1020.95,
                        "grnd_level": 1020.26,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }],
                    "clouds": {
                        "all": 12
                    },
                    "wind": {
                        "speed": 4.31,
                        "deg": 171.508
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-05 18:00:00"
                }, {
                    "dt": 1522962000,
                    "main": {
                        "temp": 300.656,
                        "temp_min": 300.656,
                        "temp_max": 300.656,
                        "pressure": 1019.1,
                        "sea_level": 1019.72,
                        "grnd_level": 1019.1,
                        "humidity": 99,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }],
                    "clouds": {
                        "all": 8
                    },
                    "wind": {
                        "speed": 3.82,
                        "deg": 181
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-05 21:00:00"
                }, {
                    "dt": 1522972800,
                    "main": {
                        "temp": 300.241,
                        "temp_min": 300.241,
                        "temp_max": 300.241,
                        "pressure": 1019.31,
                        "sea_level": 1020.03,
                        "grnd_level": 1019.31,
                        "humidity": 100,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }],
                    "clouds": {
                        "all": 12
                    },
                    "wind": {
                        "speed": 4.31,
                        "deg": 193.505
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-06 00:00:00"
                }, {
                    "dt": 1522983600,
                    "main": {
                        "temp": 301.651,
                        "temp_min": 301.651,
                        "temp_max": 301.651,
                        "pressure": 1021.47,
                        "sea_level": 1022.13,
                        "grnd_level": 1021.47,
                        "humidity": 96,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }],
                    "clouds": {
                        "all": 8
                    },
                    "wind": {
                        "speed": 4.17,
                        "deg": 202.503
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-06 03:00:00"
                }, {
                    "dt": 1522994400,
                    "main": {
                        "temp": 303.466,
                        "temp_min": 303.466,
                        "temp_max": 303.466,
                        "pressure": 1021.39,
                        "sea_level": 1021.98,
                        "grnd_level": 1021.39,
                        "humidity": 87,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.36,
                        "deg": 172.506
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-06 06:00:00"
                }, {
                    "dt": 1523005200,
                    "main": {
                        "temp": 303.698,
                        "temp_min": 303.698,
                        "temp_max": 303.698,
                        "pressure": 1019.15,
                        "sea_level": 1019.62,
                        "grnd_level": 1019.15,
                        "humidity": 83,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.75,
                        "deg": 152
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-06 09:00:00"
                }, {
                    "dt": 1523016000,
                    "main": {
                        "temp": 302.81,
                        "temp_min": 302.81,
                        "temp_max": 302.81,
                        "pressure": 1018.83,
                        "sea_level": 1019.37,
                        "grnd_level": 1018.83,
                        "humidity": 86,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }],
                    "clouds": {
                        "all": 8
                    },
                    "wind": {
                        "speed": 5.2,
                        "deg": 153.001
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-06 12:00:00"
                }, {
                    "dt": 1523026800,
                    "main": {
                        "temp": 301.662,
                        "temp_min": 301.662,
                        "temp_max": 301.662,
                        "pressure": 1020.92,
                        "sea_level": 1021.56,
                        "grnd_level": 1020.92,
                        "humidity": 94,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }],
                    "clouds": {
                        "all": 20
                    },
                    "wind": {
                        "speed": 4.51,
                        "deg": 159.504
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-06 15:00:00"
                }, {
                    "dt": 1523037600,
                    "main": {
                        "temp": 301.138,
                        "temp_min": 301.138,
                        "temp_max": 301.138,
                        "pressure": 1021.74,
                        "sea_level": 1022.44,
                        "grnd_level": 1021.74,
                        "humidity": 98,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.2,
                        "deg": 164.5
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-06 18:00:00"
                }, {
                    "dt": 1523048400,
                    "main": {
                        "temp": 300.54,
                        "temp_min": 300.54,
                        "temp_max": 300.54,
                        "pressure": 1020.56,
                        "sea_level": 1021.22,
                        "grnd_level": 1020.56,
                        "humidity": 100,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.71,
                        "deg": 178.5
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-06 21:00:00"
                }, {
                    "dt": 1523059200,
                    "main": {
                        "temp": 300.114,
                        "temp_min": 300.114,
                        "temp_max": 300.114,
                        "pressure": 1020.94,
                        "sea_level": 1021.57,
                        "grnd_level": 1020.94,
                        "humidity": 100,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.61,
                        "deg": 198.003
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-07 00:00:00"
                }, {
                    "dt": 1523070000,
                    "main": {
                        "temp": 301.588,
                        "temp_min": 301.588,
                        "temp_max": 301.588,
                        "pressure": 1023.27,
                        "sea_level": 1023.87,
                        "grnd_level": 1023.27,
                        "humidity": 96,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.17,
                        "deg": 210.502
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-07 03:00:00"
                }, {
                    "dt": 1523080800,
                    "main": {
                        "temp": 303.304,
                        "temp_min": 303.304,
                        "temp_max": 303.304,
                        "pressure": 1023.24,
                        "sea_level": 1023.84,
                        "grnd_level": 1023.24,
                        "humidity": 89,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.31,
                        "deg": 173.002
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-07 06:00:00"
                }, {
                    "dt": 1523091600,
                    "main": {
                        "temp": 303.575,
                        "temp_min": 303.575,
                        "temp_max": 303.575,
                        "pressure": 1020.63,
                        "sea_level": 1021.17,
                        "grnd_level": 1020.63,
                        "humidity": 84,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.41,
                        "deg": 141
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-07 09:00:00"
                }, {
                    "dt": 1523102400,
                    "main": {
                        "temp": 302.788,
                        "temp_min": 302.788,
                        "temp_max": 302.788,
                        "pressure": 1019.84,
                        "sea_level": 1020.46,
                        "grnd_level": 1019.84,
                        "humidity": 87,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 5.21,
                        "deg": 132.503
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-07 12:00:00"
                }, {
                    "dt": 1523113200,
                    "main": {
                        "temp": 301.889,
                        "temp_min": 301.889,
                        "temp_max": 301.889,
                        "pressure": 1022.01,
                        "sea_level": 1022.65,
                        "grnd_level": 1022.01,
                        "humidity": 94,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }],
                    "clouds": {
                        "all": 12
                    },
                    "wind": {
                        "speed": 4.66,
                        "deg": 141.502
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-07 15:00:00"
                }, {
                    "dt": 1523124000,
                    "main": {
                        "temp": 301.416,
                        "temp_min": 301.416,
                        "temp_max": 301.416,
                        "pressure": 1022.93,
                        "sea_level": 1023.59,
                        "grnd_level": 1022.93,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.28,
                        "deg": 140.502
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-07 18:00:00"
                }, {
                    "dt": 1523134800,
                    "main": {
                        "temp": 300.865,
                        "temp_min": 300.865,
                        "temp_max": 300.865,
                        "pressure": 1021.43,
                        "sea_level": 1022.14,
                        "grnd_level": 1021.43,
                        "humidity": 99,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.49,
                        "deg": 156.503
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-07 21:00:00"
                }, {
                    "dt": 1523145600,
                    "main": {
                        "temp": 300.547,
                        "temp_min": 300.547,
                        "temp_max": 300.547,
                        "pressure": 1021.38,
                        "sea_level": 1022.12,
                        "grnd_level": 1021.38,
                        "humidity": 99,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.09,
                        "deg": 173.001
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-08 00:00:00"
                }, {
                    "dt": 1523156400,
                    "main": {
                        "temp": 302.482,
                        "temp_min": 302.482,
                        "temp_max": 302.482,
                        "pressure": 1023.65,
                        "sea_level": 1024.25,
                        "grnd_level": 1023.65,
                        "humidity": 93,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 1.76,
                        "deg": 195
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-08 03:00:00"
                }, {
                    "dt": 1523167200,
                    "main": {
                        "temp": 303.811,
                        "temp_min": 303.811,
                        "temp_max": 303.811,
                        "pressure": 1023.82,
                        "sea_level": 1024.41,
                        "grnd_level": 1023.82,
                        "humidity": 87,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.9,
                        "deg": 131.502
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-08 06:00:00"
                }, {
                    "dt": 1523178000,
                    "main": {
                        "temp": 303.571,
                        "temp_min": 303.571,
                        "temp_max": 303.571,
                        "pressure": 1021.41,
                        "sea_level": 1022.05,
                        "grnd_level": 1021.41,
                        "humidity": 86,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }],
                    "clouds": {
                        "all": 24
                    },
                    "wind": {
                        "speed": 4.66,
                        "deg": 104.002
                    },
                    "rain": {
                        "3h": 0.14
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-08 09:00:00"
                }, {
                    "dt": 1523188800,
                    "main": {
                        "temp": 303.152,
                        "temp_min": 303.152,
                        "temp_max": 303.152,
                        "pressure": 1021.04,
                        "sea_level": 1021.66,
                        "grnd_level": 1021.04,
                        "humidity": 87,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 5.41,
                        "deg": 98.503
                    },
                    "rain": {},
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2018-04-08 12:00:00"
                }, {
                    "dt": 1523199600,
                    "main": {
                        "temp": 302.496,
                        "temp_min": 302.496,
                        "temp_max": 302.496,
                        "pressure": 1022.75,
                        "sea_level": 1023.45,
                        "grnd_level": 1022.75,
                        "humidity": 91,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }],
                    "clouds": {
                        "all": 12
                    },
                    "wind": {
                        "speed": 5.27,
                        "deg": 117.501
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-08 15:00:00"
                }, {
                    "dt": 1523210400,
                    "main": {
                        "temp": 302.074,
                        "temp_min": 302.074,
                        "temp_max": 302.074,
                        "pressure": 1023.3,
                        "sea_level": 1023.95,
                        "grnd_level": 1023.3,
                        "humidity": 94,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }],
                    "clouds": {
                        "all": 36
                    },
                    "wind": {
                        "speed": 4.92,
                        "deg": 129.501
                    },
                    "rain": {},
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-08 18:00:00"
                }, {
                    "dt": 1523221200,
                    "main": {
                        "temp": 300.502,
                        "temp_min": 300.502,
                        "temp_max": 300.502,
                        "pressure": 1021.94,
                        "sea_level": 1022.49,
                        "grnd_level": 1021.94,
                        "humidity": 100,
                        "temp_kf": 0
                    },
                    "weather": [{
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }],
                    "clouds": {
                        "all": 32
                    },
                    "wind": {
                        "speed": 4.22,
                        "deg": 136.501
                    },
                    "rain": {
                        "3h": 2.59
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2018-04-08 21:00:00"
                }],
                "city": {
                    "id": 1264527,
                    "name": "Chennai",
                    "coord": {
                        "lat": 13.0878,
                        "lon": 80.2785
                    },
                    "country": "IN",
                    "population": 4328063
                }
            }
        };

        return (
            <div>
                <input id="searchTextField" type="text" onChange={this.populateCity} size="50" autoComplete="on" />
                <button onClick={this.buttonClick.bind(this)}>Submit</button>

                <div>
                    {this.props.cities ? <Detailscomponent selectedCity={this.props.cities.selectedCity} weatherList={this.props.cities.weatherList} /> : ''}
                </div>

                <div>
                    {this.props.cities ? <Chartcomponent selectedCity={this.props.cities.selectedCity} weatherList={this.props.cities.weatherList} ref={node => this.node = node} /> : ''}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ cities }) {
    return {
        cities
    }
}

export default connect(mapStateToProps, actions)(Dashboard);