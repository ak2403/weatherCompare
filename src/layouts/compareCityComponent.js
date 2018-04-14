import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Col, Grid, Row, Panel } from 'react-bootstrap';
import CompareDetailComponent from '../components/compareDetailComponent';

class compareCityComponent extends Component {
    constructor(props) {
        super();
    }

    componentWillMount() {
        // debugger
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>
                            <CompareDetailComponent selectedCity={this.props.cities.selectedCity} />
                        </Col>
                        <Col md={6}>
                            <CompareDetailComponent selectedCity={this.props.secondaryCities.selectedCity} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({ cities, secondaryCities }) {
    return {
        cities, secondaryCities
    }
}

export default connect(mapStateToProps, actions)(compareCityComponent);
// export default compareCityComponent;
