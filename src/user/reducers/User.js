/**
 * Created by seven sins on 1/7/2017.
 */
const initialState = {

};
const User = (state = initialState, action = null) => {
    switch (action.type) {
        case 'INSERT':
            return {};
        case 'UPDATE':
            return action.user;
        default:
            return state
    }
};
export default User;

