/**
 * Created by seven sins on 1/7/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import routes from './routes';
/**
 * 解决IE浏览器不支持fetch
 */
import 'whatwg-fetch';
/**
 * 解决IE浏览器不支持ES6新的API
 */
import 'babel-polyfill';

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
    //console.log(store.getState());
});

export const render = () =>{
    ReactDOM.render(
        <Provider store={ store }>
            { routes }
        </Provider>,
        document.getElementById('app')
    );
};
