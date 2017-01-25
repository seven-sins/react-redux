/**
 * Created by seven sins on 1/7/2017.
 */
const initialState = {
    total: 0,
    data: []
};
const User = (state = initialState, action = null) => {
    switch (action.type) {
        case 'LOADDATA':
            return {
                ...state,
                data: action.data,
                total: action.total
            };
        default:
            return {
                ...state
            };
    }
};
export default User;
