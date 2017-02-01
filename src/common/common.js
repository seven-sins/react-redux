/**
 * Created by seven sins on 1/10/2017.
 */
import React, { Component } from 'react';
/**
 * http
 */
const srvUrl = "http://localhost:3001";
const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=UTF-8"
};
export const http = {
    srvUrl: srvUrl,
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
        fetch(srvUrl + url, Object.assign({ headers: headers }, data) )
            .then( response =>  response.json() )
            .then(data => {
                if(data.code == 0){
                    success.call(this, data);
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
 * 左侧导航菜单
 * @type {[*]}
 */
export const menu = [
    { name: "首页", url: "/" },
    { name: "角色管理", url: "/role" },
    { name: "用户管理", url: "/user" }
];
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
