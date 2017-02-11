/**
 * Created by seven sins on 1/7/2017.
 */

const initialState = {
    total: 0,
    data: [],
    privileges: []
};
const Role = (state = initialState, action = null) => {
    switch (action.type) {
        case 'LOADDATA':
            return {
                ...state,
                data: action.data,
                total: action.total
            };
        case 'LOADPRIVILEGE':
            return {
                ...state,
                privileges: action.privileges
            };
        default:
            return {
                ...state
            };
    }
};
export default Role;
