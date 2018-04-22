import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class detailsComponent extends Component {
    constructor(props) {
        super();
    }

    componentWillMount() {
    }

    render() {
        const { name, sys, coord, wind, main, weather } = this.props.selectedCity;
        debugger
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <Panel style={{'height': '250px'}}>
                            
                            <Panel.Body className="mainDetailPanel">
                                <span className="temperature"><img src={"http://openweathermap.org/img/w/" + weather[0].icon+ ".png"} />{main.temp}&deg;C</span>
                                <span className="cityname">{name}</span>
                                <span className="countryname">{sys.country}</span>
                            </Panel.Body>
                            <Panel.Body className="secondaryDetailPanel">
                                <Row className="show-grid tempDetails">
                                    <Col xs={12} md={3}>
                                        <img src="./images/temp.png" alt="Temperature-icon" width="60%" />
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
                                        <img src="./images/wind.png" alt="wind-icon" width="60%" />
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
                                        <img src="./images/humidity.png" alt="humidity-icon" width="60%" />
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
                                        <img src="./images/location.png" alt="location-icon" width="60%" />
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
                </Row>
            </Grid>
        )
    }
}

export default detailsComponent;