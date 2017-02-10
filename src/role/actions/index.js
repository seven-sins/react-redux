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
    http.request("/role" + http.convert(filter), { method: 'GET' },
        data => {
            dispatch(updateData({ data: data.data, total: data.total }));
        });
};
export const load = (filter) => {
    return dispatch => {
        get(dispatch, filter);
    }
};
export const remove = (role) => {
    return dispatch => {
        http.request( "/role/" + role.id, { method: 'DELETE' },
            data => {
                get(dispatch);
            });
    }
};
export const save = (role, callback) => {
    let method = role.id ? "PUT" : "POST";
    let url = role.id ? "/role/" + role.id : "/role";

    return (dispatch, getState) => {
        http.request(url, { body: JSON.stringify(role), method: method },
            data => {
                callback.call();
            });
    };
};
