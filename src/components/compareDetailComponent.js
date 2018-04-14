import React, { Component } from 'react';
import { Col, Grid, Row, Panel, Label } from 'react-bootstrap';

class compareDetailComponent extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { main, name, sys, coord } = this.props.selectedCity;

        return (
            <div>
                <Panel>
                    <Panel.Body>
                        <span className="temperature">{main.temp}&deg;C</span>
                        <span className="cityname">{name}</span>
                        <span className="countryname">{sys.country}</span>
                    </Panel.Body>
                </Panel>
                <Grid style={{ "width": "100%", "textAlign": "center", "fontSize": "16px" }}>
                    <Row className="show-grid">
                        <Col md={3}>
                            Latitute<br />
                            <Label>{coord.lat}</Label>
                        </Col>
                        <Col md={3}>
                            Longitute<br />
                            <Label>{coord.lon}</Label>
                        </Col>
                        <Col md={3}>
                            Min.Temp<br />
                            <Label>{main.temp_min}&deg;C</Label>
                        </Col>
                        <Col md={3}>
                            Max.Temp<br />
                            <Label>{main.temp_max}&deg;C</Label>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default compareDetailComponent;