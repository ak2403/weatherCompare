import React, { Component } from 'react';
import { Col, Grid, Row, Panel } from 'react-bootstrap';

class compareDetailComponent extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { main, name, sys } = this.props.selectedCity;

        return (
            <div>
                <Panel>
                    <Panel.Body>
                        <span className="temperature">{main.temp}&deg;C</span>
                        <span className="cityname">{name}</span>
                        <span className="countryname">{sys.country}</span>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default compareDetailComponent;