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
            isCompare: false,
            compareText: 'I Want to compare'
        };
        this.populateCity = this.populateCity.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.enableCompare = this.enableCompare.bind(this);
        this.changeState = this.changeState.bind(this);
        console.log("constructor func")
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.secondaryCity && nextState.isCompare)
            return true;
        else
            return false;
    }

    /**
     * Function execute when Multi-City 
     *  enable or disenable
     */
    enableCompare() {
        this.setState({
            isCompare: !this.state.isCompare,
            secondaryCity: '',
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
        let compareElement = '',
            renderElement = '';

        if (this.state.isCompare) {
            compareElement = <input id="secondaryCity" type="text" placeholder="Search your city" onChange={this.populateCity} size="50" autoComplete="on" />;
            renderElement = <CompareCityComponent />
        } else {
            renderElement = <SingleCityComponent />

        }
        
        return (
            <div>
                <div className="formPanel">
                    <div className="inputPanel">
                        <input id="primaryCity" type="text" placeholder="Search your city" onChange={this.populateCity} size="50" autoComplete="on" />
                        {compareElement}
                    </div>
                    <div className="buttonPanel">
                        <Button bsStyle="primary" onClick={this.buttonClick.bind(this)}>Submit</Button>
                        <span onClick={this.enableCompare} className="anchorElement">{this.state.compareText}</span>
                    </div>
                </div>

                {renderElement}

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