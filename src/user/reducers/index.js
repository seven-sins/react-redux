/**
 * Created by seven sins on 1/7/2017.
 */
import { combineReducers } from 'redux';
import User from './User';

/**
 * 虽然本例中只有一个reducer，但还是使用了`combineReducers`来进行合并，便于后期的拓展。
 */

const rootReducer = combineReducers({
    User
});

export default rootReducer;
