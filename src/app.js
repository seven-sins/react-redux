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
import routes from './routes';

const store = createStore(reducerList, applyMiddleware(thunk));
store.subscribe(() => {
    //console.log(store.getState());
});

export const render = () =>{
    let params = { test: 1 };
    ReactDOM.render(
        <Provider store={store} { ...params }>
            {routes}
        </Provider>,
        document.getElementById('app')
    );
};
