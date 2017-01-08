/**
 * Created by seven sins on 1/7/2017.
 */
const add = (user) =>{
    return {
        type: 'INCREMENT',
        user
    }
};
const edit = (user) =>{
    return {
        type: 'DECREMENT',
        user
    }
};
const loadData = (filter) =>{
    return {
        type: 'LOADDATA',
        filter
    }
};
export const insert = (user) => {
    return dispatch => {
        dispatch(add(user));
    }
};
export const update = (delay = 1000) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(edit());
        }, delay);
    };
};
export const find = (filter) => {
    return dispatch => {
        dispatch(loadData(filter));
    }
};