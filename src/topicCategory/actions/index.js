/**
 *
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
    http.request("/api/topicCategory" + http.convert(filter), { method: 'GET' },
        data => {
            dispatch(updateData({ data: data.data, total: data.total }));
        });
};
export const load = (filter) => {
    return dispatch => {
        get(dispatch, filter);
    }
};
export const remove = (topicCategory) => {
    return dispatch => {
        http.request( "/api/topicCategory/" + topicCategory.id, { method: 'DELETE' },
            data => {
                get(dispatch);
            });
    }
};
export const save = (topicCategory, callback) => {
    let method = topicCategory.id ? "PUT" : "POST";
    let url = topicCategory.id ? "/api/topicCategory/" + topicCategory.id : "/api/topicCategory";

    return (dispatch, getState) => {
        http.request(url, { body: JSON.stringify(topicCategory), method: method },
            data => {
                callback.call();
            });
    };
};
