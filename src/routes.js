/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import User from './user/containers/User' // 引入各容器组件
import UserList from './user/containers/List'
import Home from './home/containers/Home'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/user" component={User}/>
            <Route path="/user/list" component={UserList}/>
        </Route>
    </Router>
);

export default routes;
