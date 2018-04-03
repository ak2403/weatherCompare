import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Table } from 'react-bootstrap';

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
                            <Panel.Body>
                                <Row className="show-grid tempDetails">
                                    <Col xs={12} md={3}>
                                        <img src="./images/temp.png" width="60%" />
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <span className='temps'>Min Temp:
                                            <block>{main.temp_min}&deg;C</block>
                                        </span>
                                        <span className='temps'>Max Temp:
                                            <block>{main.temp_max}&deg;C</block>
                                        </span>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <img src="./images/wind.png" width="60%" />
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <span className='temps'>Speed:
                                            <block>{wind.speed}&deg;C</block>
                                        </span>
                                        <span className='temps'>Degree:
                                            <block>{wind.deg}&deg;C</block>
                                        </span>
                                    </Col>
                                </Row>

                                <Row className="show-grid tempDetails">
                                    <Col xs={12} md={3}>
                                        <img src="./images/humidity.png" width="60%" />
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <span className='temps'>Pressure:
                                            <block>{main.pressure}</block>
                                        </span>
                                        <span className='temps'>Humidity:
                                            <block>{main.humidity}</block>
                                        </span>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <img src="./images/location.png" width="60%" />
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <span className='temps'>Lat:
                                            <block>{coord.lat}</block>
                                        </span>
                                        <span className='temps'>Long:
                                            <block>{coord.lon}</block>
                                        </span>
                                    </Col>
                                </Row>
                            </Panel.Body>
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