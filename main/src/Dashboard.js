import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Detailscomponent from './components/detailsComponent';
import Chartcomponent from './components/chartComponent';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: '',
            isCompare: false
        };
        this.populateCity = this.populateCity.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.enableCompare = this.enableCompare.bind(this);
    }

    enableCompare(){
        this.setState({ isCompare: true });
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
        let compareElement = '';

        if(this.state.isCompare){
            compareElement = <input id="searchTextField1" type="text" placeholder="Search your city" onChange={this.populateCity} size="50" autoComplete="on" />;
        }

        return (
            <div>
                <div className="inputPanel">
                    <input id="searchTextField" type="text" placeholder="Search your city" onChange={this.populateCity} size="50" autoComplete="on" />
                    <button onClick={this.buttonClick.bind(this)}>Submit</button>
                    <span onClick={this.enableCompare}>Want to Compare</span>
                    {compareElement}
                </div>
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