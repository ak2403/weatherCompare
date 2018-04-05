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
        this.changeState = this.changeState.bind(this);
    }

    enableCompare() {
        this.setState({ isCompare: true, secondaryCity: '' });
    }

    buttonClick = () => {
        this.props.fetchCity({ city: this.state.selectedCity.name });
        if (this.state.isCompare) {
            this.props.fetchSecondaryCity({ city: this.state.secondaryCity.name });
        }
    }

    changeState(state) {
        this.setState(state);
    }

    populateCity = () => {
        const google = window.google;

        let options = {
            types: ['geocode'],
            stateProp: this
        };

        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('primaryCity'), options);
        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace();
            this.changeState({
                'selectedCity': place
            });
        });

        if (this.state.isCompare) {
            let secondaryAutocomplete = new google.maps.places.Autocomplete(document.getElementById('secondaryCity'), options);
            secondaryAutocomplete.addListener('place_changed', () => {
                let place = autocomplete.getPlace();
                this.changeState({
                    'secondaryCity': place
                });
            });
        }

    }

    render() {
        let compareElement = '';

        if (this.state.isCompare) {
            compareElement = <input id="secondaryCity" type="text" placeholder="Search your city" onChange={this.populateCity} size="50" autoComplete="on" />;
        }

        return (
            <div>
                <div className="inputPanel">
                    <input id="primaryCity" type="text" placeholder="Search your city" onChange={this.populateCity} size="50" autoComplete="on" />
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