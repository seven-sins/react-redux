/**
 * Created by seven sins on 1/10/2017.
 */
import React, { Component } from 'react';
/**
 * http
 */
export const http = {
    srvUrl: "http://localhost:3001",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=UTF-8"
    },
    LOAD: "LOADDATA"
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
