/**
 * Created by seven sins on 1/7/2017.
 */
import { browserHistory, hashHistory } from 'react-router';

//const list = [
//    {
//        id: 1,
//        userName: 'aaa',
//        passWord: '123'
//    }
//];

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};
const load = (list) =>{
    return {
        type: 'LOADDATA',
        list
    }
};
export const loadData = (filter) => {
    return dispatch => {
        //dispatch(load(list));
        fetch("/user", { headers: headers }).then( response => response.json() )
            .then(data => {
                if(data.code == 0){
                    dispatch(load(data.data));
                }else{
                    s.alert(data.message);
                }
            })
    }
};
export const save = (user, callback) =>{
    let method = user.id ? "PUT" : "POST";
    let url = user.id ? "/user/" + user.id : "/user";
    return (dispatch, getState) => {
        fetch(url, { method: method, headers: headers, body: JSON.stringify(user) }).then( response => response.json() )
            .then(data => {
                if(data.code == 0){
                    dispatch({ type: 'INSERT',user });
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
        fetch("/user/" + user.id, { headers: headers, method: "DELETE" }).then( response => response.json() )
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
        dispatch({ type: 'INSERT',user });
    };
};
export const toUpdate = (user) => {
    return dispatch => {
        dispatch({ type: 'UPDATE',user });
    };
};




