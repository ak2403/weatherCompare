import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class detailsComponent extends Component {
    constructor(props) {
        super();
    }

    componentWillMount() {
    }

    render() {
        const { name, sys, coord, wind } = this.props.selectedCity;
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Panel>
                            <Panel.Body>
                                {name}
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