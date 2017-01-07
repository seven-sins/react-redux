/**
 * Created by seven sins on 1/7/2017.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import User from '../user/reducers/User';
import Home from '../home/reducers/Home';

const reducer = {
    User: User,
    Home: Home
};

const reducerList = combineReducers({
    ...reducer
});

export default reducerList;

