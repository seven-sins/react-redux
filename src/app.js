/**
 * Created by seven sins on 1/7/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import User from './user/containers/User';
import user from './user/reducers';
const store = createStore(user, applyMiddleware(thunk));
const el = document.getElementById('app');

export const render = () =>{
    ReactDOM.render(
        <Provider store={store}>
            <User />
        </Provider>,
        el
    );
};
