/**
 * Created by seven sins on 1/7/2017.
 */
import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import User from './user/containers/Index'
import Role from './role/containers/Index'
import Privilege from './privilege/containers/Index'
import MenuCategory from './menuCategory/containers/Index'
import TopicCategory from './topicCategory/containers/Index'
import Home from './home/containers/Home'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/role" component={Role}/>
            <Route path="/user" component={User}/>
            <Route path="/privilege" component={Privilege}/>
            <Route path="/menuCategory" component={MenuCategory}/>
            <Route path="/topicCategory" component={TopicCategory}/>
        </Route>
    </Router>
);

export default routes;
