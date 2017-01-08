/**
 * Created by seven sins on 1/7/2017.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import User from '../user/reducers/User';
import UserList from '../user/reducers/List';
import Home from '../home/reducers/Home';

const reducer = {
    User: User,
    UserList: UserList,
    Home: Home
};

const reducerList = combineReducers({
    ...reducer
});

export default reducerList;

