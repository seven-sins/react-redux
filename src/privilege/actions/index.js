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
    http.request("/api/privilege" + http.convert(filter), { method: 'GET' },
        data => {
            dispatch(updateData({ data: data.data, total: data.total }));
        });
};
export const load = (filter) => {
    return dispatch => {
        get(dispatch, filter);
    }
};
export const remove = (privilege) => {
    return dispatch => {
        http.request( "/api/privilege/" + privilege.id, { method: 'DELETE' },
            data => {
                get(dispatch);
            });
    }
};
export const save = (privilege, callback) => {
    let method = privilege.id ? "PUT" : "POST";
    let url = privilege.id ? "/api/privilege/" + privilege.id : "/api/privilege";

    return (dispatch, getState) => {
        http.request(url, { body: JSON.stringify(privilege), method: method },
            data => {
                callback.call();
            });
    };
};
