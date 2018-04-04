import React, { Component } from 'react';
import _ from 'lodash';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class detailsComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }

    componentWillMount() {

        _.map(this.props.weatherList.list, (data) => {
            this.state.data.push({
                name: data.dt_txt,
                pv: data.main.temp - 273.15
            });
        });
    }

    render() {
        return (
            <ResponsiveContainer width="100%"  height={300}>
                <LineChart data={this.state.data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default detailsComponent;