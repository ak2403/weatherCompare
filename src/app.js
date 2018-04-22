import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Dashboard from './Dashboard';

class App extends Component{
    render(){
        const Styles = {
            creditStyle: {
                position: 'absolute',
                bottom: 0,
                right: '30px',
                fontSize: '12px'
            }
        };

        return (
            <div>
                <BrowserRouter>
                    <Route path='/' component={Dashboard}/>
                </BrowserRouter>
                <div style={Styles.creditStyle}>Created by Arun Kumar</div>
            </div>
        )
    }
}

export default connect(null, actions)(App);

//api key -> AIzaSyAXiLq8UIDVy-6EOk3W6Etd0QnRiwY8EQQ 