/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Grid from '../../common/components/Grid';
import Dialog from '../../common/components/Dialog';
import User from './User';
import { Base } from '../../common/common';

@connect( state =>({ data: state.User.data, total: state.User.total }), ActionCreators )
class Index extends Base{
    constructor(props, context){
        super(props, context);
    }
    componentDidMount = () =>{
        this.props.load();
    };
    create = () =>{
        let dialogParams = { width: 600, height: 430, title: "新建", dialog: this.dialog };
        this.dialog(   <Dialog { ...dialogParams }>
                            <User { ...this.method() } />
                        </Dialog>)
    };
    update = (model) =>{
        let dialogParams = { width: 600, height: 430, title: "编辑", dialog: this.dialog };
        let userParams = Object.assign( { user: model, changeIndex: this.refs.grid.changeIndex }, { ...this.method() } );
        this.dialog(   <Dialog { ...dialogParams }>
                            <User { ...userParams } />
                        </Dialog>)
    };
    remove = (model) =>{
        this.props.remove(model);
    };
    render = () =>{
        let { data, total } = this.props;
        let grid = {
            toolbar: [
                { name: 'load', option: { action: this.props.load, url: '/api/user', method: 'get' } },
                { name: 'create', option: { action: this.create, url: '/api/user', method: 'post' } },
                { name: 'update', option: { action: this.update, url: '/api/user/{id}', method: 'put' } },
                { name: 'remove', option: { action: this.remove, url: '/api/user/{id}', method: 'delete' } }
            ],
            columns: [
                { field: "id", title: 'id', width: 200, class: 'hide' },
                { field: "roleName", title: '角色', width: '16%' },
                { field: "userName", title: '用户名', width: '16%' },
                { field: "nickName", title: '昵称', width: '16%' },
                { field: "phoneNumber", title: '电话', width: '16%' },
                { field: "email", title: '邮箱', width: '15%' },
                { field: "birthday", title: '出生日期', width: '10%', type: 'date', format: 'yyyy-MM-dd' },
                { field: "status", title: '状态', width: '10%', template: (row) => {
                    if(row.status === 0){
                        return <span style={{ color: 'green' }}>启用</span>;
                    }else{
                        return <span style={{ color:'#f00' }}>禁用</span>;
                    }
                } }
            ],
            data: data,
            total: total
        };
        return(
            <div>
                <Grid { ... grid } ref="grid" />
                { this.state.dialog }
            </div>
        )
    }
}

export default Index;
