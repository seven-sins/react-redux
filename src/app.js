/**
 * Created by seven sins on 1/7/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import User from './user/containers/User';
import reducer from './reducer';
import routes from './routes';

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
    //console.log(store.getState());
});

export const render = () =>{
    ReactDOM.render(
        <Provider store={store}>
            {routes}
        </Provider>,
        document.getElementById('app')
    );
};
