import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as actions from './actions';
import SingleCityComponent from './layouts/SingleCityComponent';
import CompareCityComponent from './layouts/compareCityComponent';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: '',
            secondaryCity: '',
            isCompare: false,
            compareText: 'I Want to compare',
            isValid: false
        };
        this.populatePrimaryCity = this.populatePrimaryCity.bind(this);
        this.populateSecondaryCity = this.populateSecondaryCity.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.enableCompare = this.enableCompare.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    /**
     * Function execute when Multi-City 
     *  enable or disenable
     */
    enableCompare() {
        this.setState({
            isCompare: !this.state.isCompare,
            compareText: !this.state.isCompare ? 'I don\'t want to compare' : 'I want to compare'
        });
    }

    /**
     * Function execute when the 
     *  'Compare' button clicked
     */
    buttonClick = () => {
        this.props.fetchCity({ city: this.state.selectedCity.name });
        if (this.state.isCompare) {
            this.props.fetchSecondaryCity({ city: this.state.secondaryCity.name });
        }
    }

    /**
     * Function to change the state
     * @param {*} state - Contains the state props
     */
    changeState(state) {
        this.setState(state);
    }

    populatePrimaryCity = () => {
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
    }

    populateSecondaryCity = () => {
        const google = window.google;

        let options = {
            types: ['geocode'],
            stateProp: this
        };

        let secondaryAutocomplete = new google.maps.places.Autocomplete(document.getElementById('secondaryCity'), options);
        secondaryAutocomplete.addListener('place_changed', () => {
            let place = secondaryAutocomplete.getPlace();
            this.changeState({
                'secondaryCity': place
            });
        });
    }

    render() {
        let compareElement = '',
            renderElement = '';

        const Styles = {
            buttonStyle: {
                width: '100px',
                height: '30px',
                backgroundColor: '#3498db',
                border: '1px solid #3498db',
                color: '#fff'
            }
        };

        if (this.state.isCompare)
            compareElement = <input id="secondaryCity" type="text" placeholder="Search your city" onChange={this.populateSecondaryCity} size="50" autoComplete="on" />;


        switch (this.state.isCompare) {
            case true:
                renderElement = (this.props.cities && this.props.secondaryCities) ? <CompareCityComponent /> : ''
                break;
            case false:
                renderElement = this.props.cities ? <SingleCityComponent /> : ''
                break;
        }

        return (
            <div>
                <div className="formPanel">
                    <div className="inputPanel">
                        <input id="primaryCity" type="text" placeholder="Search your city" onChange={this.populatePrimaryCity} size="50" autoComplete="on" />
                        {compareElement}
                    </div>
                    <div className="buttonPanel">
                        <button style={Styles.buttonStyle} onClick={this.buttonClick.bind(this)}>Submit</button>
                        <span onClick={this.enableCompare} className="anchorElement">{this.state.compareText}</span>
                    </div>
                </div>

                {renderElement}

            </div>
        )
    }
}

function mapStateToProps({ cities, secondaryCities }) {
    return {
        cities, secondaryCities
    }
}

export default connect(mapStateToProps, actions)(Dashboard);