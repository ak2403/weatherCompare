import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class detailsComponent extends Component {
    constructor(props) {
        super();
    }

    componentWillMount() {
    }

    render() {
        const { name, sys, coord, wind, main } = this.props.selectedCity;
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                        <Panel>
                            <Panel.Body>
                                <span className="temperature">{main.temp}&deg;C</span>
                                <span className="cityname">{name}</span>
                                <span className="countryname">{sys.country}</span>
                            </Panel.Body>
                        </Panel>
                        <Panel>
                            Coordinates<br/>
                            latitude: {coord.lat}
                            longitude: {coord.lon}
                        </Panel>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default detailsComponent;