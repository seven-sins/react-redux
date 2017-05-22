/**
 * Created by seven sins on 1/7/2017.
 */
import { http } from '../../common/common';

const updateData = (response) => {
    return {
        type: http.LOAD,
        data: response.data,
        total: response.total
    }
};
const get = (dispatch, filter) => {
    http.request("/api/user" + http.convert(filter), { method: 'GET' },
        data => {
            dispatch(updateData({ data: data.data, total: data.total }));
        });
};
export const load = (filter) => {
    return dispatch => {
        get(dispatch, filter);
    }
};
export const remove = (user) => {
    return dispatch => {
        http.request("/api/user/" + user.id, { method: 'DELETE' },
            data => {
                get(dispatch);
            });
    }
};
export const save = (user, callback) => {
    let method = user.id ? "PUT" : "POST";
    let url = user.id ? "/api/user/" + user.id : "/api/user";

    return (dispatch, getState) => {
        http.request(url, { body: JSON.stringify(user), method: method },
            data => {
                callback.call();
            });
    };
};
