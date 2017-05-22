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
    http.request("/api/menuCategory" + http.convert(filter), { method: 'GET' },
        data => {
            dispatch(updateData({ data: data.data, total: data.total }));
        });
};
export const load = (filter) => {
    return dispatch => {
        get(dispatch, filter);
    }
};
export const remove = (menuCategory) => {
    return dispatch => {
        http.request( "/api/menuCategory/" + menuCategory.id, { method: 'DELETE' },
            data => {
                get(dispatch);
            });
    }
};
export const save = (menuCategory, callback) => {
    let method = menuCategory.id ? "PUT" : "POST";
    let url = menuCategory.id ? "/api/menuCategory/" + menuCategory.id : "/api/menuCategory";

    return (dispatch, getState) => {
        http.request(url, { body: JSON.stringify(menuCategory), method: method },
            data => {
                callback.call();
            });
    };
};
////////////////////////////////////////////////////////
const updateModule = response => {
    return {
        type: "LOADMODULE",
        modules: response.modules
    }
};
export const loadModule = () => {
    return dispatch => {
        dispatch(updateModule({ modules: [] })); // 先清空store中的缓存
        http.request("/api/privilege/list", { method: 'GET' },
            data => {
                dispatch(updateModule({ modules: data.data }));
            });
    }
};
export const saveModule = (data, callback) => {
    return dispatch => {
        http.request("/api/menuCategory/" + data.id + "/modules", { method: 'PUT', body: JSON.stringify(data) },
            data => {
                if(callback) callback.call();
            });
    }
};
