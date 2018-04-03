import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Detailscomponent from './components/detailsComponent';

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
        // debugger;
        this.props.fetchCity({ city : 'chennai' });
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
        let cityprops = {"coord":{"lon":80.28,"lat":13.09},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":30,"pressure":1011,"humidity":79,"temp_min":30,"temp_max":30},"visibility":6000,"wind":{"speed":2.6,"deg":180},"clouds":{"all":40},"dt":1522722600,"sys":{"type":1,"id":7834,"message":0.0056,"country":"IN","sunrise":1522715634,"sunset":1522759837},"id":1264527,"name":"Chennai","cod":200};
        return (
            <div>
                <input id="searchTextField" type="text" onChange={this.populateCity} size="50" autoComplete="on" />
                <button onClick={this.buttonClick.bind(this)}>Submit</button>

                <div>
                   <Detailscomponent selectedCity={cityprops}/>
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