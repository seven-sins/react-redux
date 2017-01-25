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
    fetch(http.srvUrl + "/user", { headers: http.headers, method: 'GET' } )
        .then( response =>  response.json() )
        .then(data => {
            if(data.code == 0){ // 请求成功，接口未返回total属性，待处理
                dispatch(loadData({ data: data.data, total: 188 }));
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
