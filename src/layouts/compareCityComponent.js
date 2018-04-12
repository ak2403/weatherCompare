import React, { Component } from "react";
import { Table, Grid } from 'react-bootstrap';

class compareCityComponent extends Component {
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

export default compareCityComponent;