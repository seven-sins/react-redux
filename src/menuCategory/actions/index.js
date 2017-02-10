/**
 * Created by seven sins on 1/7/2017.
 */
import { http } from '../../common/common';

const loadData = (response) => {
    return {
        type: http.LOAD,
        data: response.data,
        total: response.total
    }
};
const get = (dispatch, filter) => {
    http.request("/menuCategory" + http.convert(filter), { method: 'GET' },
        data => {
            dispatch(loadData({ data: data.data, total: data.total }));
        });
};
export const load = (filter) => {
    return dispatch => {
        get(dispatch, filter);
    }
};
export const remove = (menuCategory) => {
    return dispatch => {
        http.request( "/menuCategory/" + menuCategory.id, { method: 'DELETE' },
            data => {
                get(dispatch);
            });
    }
};
export const save = (menuCategory, callback) => {
    let method = menuCategory.id ? "PUT" : "POST";
    let url = menuCategory.id ? "/menuCategory/" + menuCategory.id : "/menuCategory";

    return (dispatch, getState) => {
        http.request(url, { body: JSON.stringify(menuCategory), method: method },
            data => {
                callback.call();
            });
    };
};
