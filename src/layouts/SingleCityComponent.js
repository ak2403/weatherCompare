import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Detailscomponent from '../components/detailsComponent';
import Chartcomponent from '../components/chartComponent';

class SingleCityComponent extends Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <div>
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

export default connect(mapStateToProps, actions)(SingleCityComponent);