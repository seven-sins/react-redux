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