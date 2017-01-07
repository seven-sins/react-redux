/**
 * Created by seven sins on 1/7/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import User from './user/containers/User';
import reducerList from './reducerList';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = createStore(reducerList, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});
const history = browserHistory;

export const render = () =>{
    ReactDOM.render(
        <Provider store={store}>
            {routes}
        </Provider>,
        document.getElementById('app')
    );
};
