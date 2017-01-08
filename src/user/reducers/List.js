/**
 * Created by seven sins on 1/7/2017.
 */
const initialState = [

];
const List = (state = initialState, action = null) => {
    switch (action.type) {
        case 'LOADDATA':
            return action.list;
        case 'REMOVE':
            return state;
        default:
            return state
    }
};
export default List;
