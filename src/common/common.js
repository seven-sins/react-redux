/**
 * Created by seven sins on 1/10/2017.
 */
import React, { Component } from 'react';

/**
 * http
 */
const srvUrl = "http://localhost:3001"; //
const localUrl = "http://127.0.0.1:3000"; //        http://115.28.76.154
/**
 * 从cookie中获取
 * @param key
 * @returns {*}
 */
const getToken = key => {
    key = key ? key : "token";
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(key + "=");
        if (c_start != -1) {
            c_start = c_start + key.length + 1;
            let c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return null;
};

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=UTF-8"
};
export const http = {
    srvUrl: srvUrl,
    localUrl: localUrl,
    headers: headers,
    LOAD: "LOADDATA",
    convert: (filter) => {
        if(!filter){
            return "";
        }
        let data = [], params = "";
        for (let key in filter) {
            data[data.length] = encodeURI(key) + "=" + encodeURIComponent(filter[key]);
        }
        if(data.length > 0){
            params = data.join('&');
            params = '?' + params;
        }
        return params;
    },
    request: (url, data, success) => {
        headers.token = getToken("token"); // 获取token添加到请求头
        fetch(srvUrl + url, Object.assign({ headers: headers }, data) )
            .then( response =>  response.json() )
            .then(data => {
                if(data.code == 0){
                    success.call(this, data);
                }else if(data.code == 2){
                    if(data.message.length > 0){
                        let msg = "";
                        for(let i=0; i<data.message.length; i++){
                            msg += "<span>" + data.message[i].field + ": "+ data.message[i].error + "</span>";
                        }
                        s.alert(msg);
                    }
                }else if(data.code == 6){
                    s.msg(data.message);
                    window.location.href = localUrl + '/login';
                }else{
                    s.alert(data.message);
                }
            })
            .catch( e => {
                s.alert("请求出错： " + e.message )
            })
    }
};
/**
 * 模块index基类
 */
export class Base extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            dialog: ''
        };
    }
    dialog = (view) => {
        view = view ? view : "";
        this.setState({
            dialog: view
        })
    };
    method = () => {
        return {
            ...this,
            ...this.props
        }
    }
}
/**
 * 检查当前按钮是否有权限
 * @param obj ==> { url: xxx, method: 'get' }
 * @param privileges
 */
export const hasPrivilege = (obj, privileges) => {
    if(!obj.url || !obj.method || privileges.length == 0){
        return false;
    }
    for(let i=0; i<privileges.length; i++){
        if(obj.url == privileges[i].url && obj.method == privileges[i].method){
            return true;
        }
    }
    return false;
};