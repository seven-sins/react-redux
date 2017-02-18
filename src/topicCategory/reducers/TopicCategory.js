/**
 *
 * @type {{total: number, data: Array}}
 */
const initialState = {
    total: 0,
    data: []
};
const TopicCategory = (state = initialState, action = null) => {
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
export default TopicCategory;

