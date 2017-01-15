/**
 * Created by seven sins on 1/7/2017.
 */
const initialState = {
    total: 0,
    data: []
};
const List = (state = initialState, action = null) => {
    switch (action.type) {
        case 'LOADDATA':
            return {
                ...state,
                data: action.list
            };
        case 'REMOVE':
            return {
                ...state
            };
        default:
            return {
                ...state
            };
    }
};
export default List;
