/**
 * Created by seven sins on 1/7/2017.
 */
import { combineReducers } from 'redux';
import User from '../user/reducers/User';
import Role from '../role/reducers/Role';
import Home from '../home/reducers/Home';

const obj = {
    User: User,
    Role: Role,
    Home: Home
};

const reducer = combineReducers({
    ...obj
});

export default reducer;
