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

    fetch(http.srvUrl + "/user" + params, { headers: http.headers, method: 'GET' } )
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
export const remove = (user) => {
    return dispatch => {
        fetch(http.srvUrl + "/user/" + user.id,  { headers: http.headers, method: "DELETE" } ).then( response => response.json() )
            .then(data => {
                if(data.code == 0){
                    get(dispatch);
                }else{
                    s.alert(data.message);
                }
            })
    }
};
export const save = (user, callback) => {
    let method = user.id ? "PUT" : "POST";
    let url = user.id ? "/user/" + user.id : "/user";
    return (dispatch, getState) => {
        fetch(http.srvUrl + url, { headers: http.headers, body: JSON.stringify(user), method: method  } ).then( response => response.json() )
            .then(data => {
                if(data.code == 0){
                    callback.call();
                }else{
                    s.alert(data.message);
                }
            })
    };
};
