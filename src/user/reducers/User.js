/**
 * Created by seven sins on 1/7/2017.
 */
const initialState = {
    id: 1,
    userName: "seven sins",
    passWord: "123456"
};
const User = (state = initialState, action = null) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                user: action.user
            };
        default:
            return state
    }
};
export default User;
