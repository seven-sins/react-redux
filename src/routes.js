/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import User from './user/containers/Index'
import Home from './home/containers/Home'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/user/list" component={User}/>
        </Route>
    </Router>
);

export default routes;
