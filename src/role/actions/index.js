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
    let data = [], params = "";
    for (let key in filter) {
        data[data.length] = encodeURI(key) + "=" + encodeURIComponent(filter[key]);
    }
    if(data.length > 0){
        params = data.join('&');
        params = '?' + params;
    }

    fetch(http.srvUrl + "/role" + params, { headers: http.headers, method: 'GET' } )
        .then( response =>  response.json() )
        .then(data => {
            if(data.code == 0){
                dispatch(loadData({ data: data.data, total: data.total }));
            }else{
                s.alert(data.message);
            }
        });
};
export const load = (filter) => {
    return dispatch => {
        get(dispatch, filter);
    }
};
export const remove = (role) => {
    return dispatch => {
        fetch(http.srvUrl + "/role/" + role.id,  { headers: http.headers, method: "DELETE" } ).then( response => response.json() )
            .then(data => {
                if(data.code == 0){
                    get(dispatch);
                }else{
                    s.alert(data.message);
                }
            })
    }
};
export const save = (role, callback) => {
    let method = role.id ? "PUT" : "POST";
    let url = role.id ? "/role/" + role.id : "/role";
    return (dispatch, getState) => {
        fetch(http.srvUrl + url, { headers: http.headers, body: JSON.stringify(role), method: method  } ).then( response => response.json() )
            .then(data => {
                if(data.code == 0){
                    callback.call();
                }else{
                    s.alert(data.message);
                }
            })
    };
};
