import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import WelcomeContainer from './pages/Welcome/WelcomeContainer';
import HomeContainer from './pages/Home/HomeContainer';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = {"/welcome"} component={WelcomeContainer}/>
                <Route exact path = {"/home"} component={HomeContainer}/>
            </Switch>
        )
    }
}

export default withRouter(Router);