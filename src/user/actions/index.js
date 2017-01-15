/**
 * Created by seven sins on 1/7/2017.
 */
import { browserHistory, hashHistory } from 'react-router';
import { http } from '../../common/common';

const load = (list) => {
    return {
        type: http.LOAD,
        list
    }
};
export const loadData = (filter) => {
    return dispatch => {
        fetch(http.srvUrl + "/user", { headers: http.headers, method: 'GET' } )
            .then( response =>  response.json() )
            .then(data => {
                if(data.code == 0){
                    dispatch(load(data.data));
                }else{
                    s.alert(data.message);
                }
            });
    }
};
export const save = (user, callback) => {
    let method = user.id ? "PUT" : "POST";
    let url = user.id ? "/user/" + user.id : "/user";
    return (dispatch, getState) => {
        fetch(http.srvUrl + url, { headers: http.headers, body: JSON.stringify(user), method: method  } ).then( response => response.json() )
            .then(data => {
                if(data.code == 0){
                    dispatch({ type: http.RESET, user });
                    callback.call();
                }else{
                    s.alert(data.message);
                }
            })
            .catch(e => { });
    };
};
export const remove = (user, list) => {
    return dispatch => {
        fetch(http.srvUrl + "/user/" + user.id,  { headers: http.headers, method: "DELETE" } ).then( response => response.json() )
            .then(data => {
                if(data.code == 0){
                    if(list && list.length > 0){
                        for(let i=0; i<list.length; i++){
                            if(list[i].id === user.id){
                                list.splice(i, 1);
                                break;
                            }
                        }
                    }
                    dispatch(load(list));
                }else{
                    s.alert(data.message);
                }
            })
            .catch(e => { });
    }
};
export const toInsert = (user) => {
    return (dispatch, getState) => {
        dispatch({ type: http.RESET, user });
    };
};
export const toUpdate = (user) => {
    return dispatch => {
        dispatch({ type: http.UPDATE, user });
    };
};




