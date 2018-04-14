import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Table, Grid } from 'react-bootstrap';

class compareCityComponent extends Component {
    constructor(props){
        super();
    }

    componentWillMount(){
        debugger
    }

    render() {
        return (
            <div>
                <Grid>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </Table>
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
