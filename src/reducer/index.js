/**
 * Created by seven sins on 1/7/2017.
 */
import { combineReducers } from 'redux';
import User from '../user/reducers/User';
import Home from '../home/reducers/Home';

const obj = {
    User: User,
    Home: Home
};

const reducer = combineReducers({
    ...obj
});

export default reducer;
