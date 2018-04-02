import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Dashboard from './Dashboard';

class App extends Component{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Route path='/' component={Dashboard}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);

//api key -> AIzaSyAXiLq8UIDVy-6EOk3W6Etd0QnRiwY8EQQ 