// import React, { Component } from 'react';
// import { Switch, Route, withRouter } from 'react-router-dom';
// import WelcomeContainer from './pages/Welcome/WelcomeContainer';
// import HomeContainer from './pages/Home/HomeContainer';
// import HappyContainer from './pages/Happy/HappyContainer';
//
// class Router extends Component {
//     render() {
//         return (
//             <Switch>
//                 <Route exact path = {"/welcome"} component={WelcomeContainer}/>
//                 <Route exact path = {"/home"} component={HomeContainer}/>
//                 <Route exact path = {"/happy"} component={HappyContainer}/>
//             </Switch>
//         )
//     }
// }
//
// export default withRouter(Router);

import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import WelcomeContainer from './pages/Welcome/WelcomeContainer';
import HomeContainer from './pages/Home/HomeContainer';
import HappyContainer from './pages/Happy/HappyContainer';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/Welcome" component={WelcomeContainer} />
                    <Route exact path="/Home" component={HomeContainer} />
                    <Route exact path="/Happy" component={HappyContainer} />
                </Switch>
            </Router>
        )
    }
}