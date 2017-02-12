/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Grid from '../../common/components/Grid';
import Dialog from '../../common/components/Dialog';
import Role from './Role';
import { Base } from '../../common/common';
import SetPrivilege from './SetPrivilege';

@connect( state =>({ data: state.Role.data, total: state.Role.total }), ActionCreators )
class Index extends Base{
    constructor(props, context){
        super(props, context);
    }
    componentDidMount = () =>{
        this.props.load();
    };
    create = () =>{
        let dialogParams = { width: 500, height: 366, title: "新建", dialog: this.dialog };
        this.dialog(   <Dialog { ...dialogParams }>
                            <Role { ...this.method() } />
                        </Dialog>)
    };
    update = model =>{
        let dialogParams = { width: 500, height: 366, title: "编辑", dialog: this.dialog };
        let roleParams = Object.assign( { role: model, changeIndex: this.refs.grid.changeIndex }, { ...this.method() } );
        this.dialog(   <Dialog { ...dialogParams }>
                            <Role { ...roleParams } />
                        </Dialog>)
    };
    remove = model =>{
        this.props.remove(model);
    };
    setPrivilege = model => {
        let dialogParams = { width: 500, height: 366, title: "编辑", dialog: this.dialog };
        let setPrivilegeParams = { role: model, dialog: this.dialog };
        this.dialog(   <Dialog { ...dialogParams }>
            <SetPrivilege { ...setPrivilegeParams } />
        </Dialog>)
    };
    render = () =>{
        let { data, total } = this.props;
        let grid = {
            toolbar: [
                { name: 'load', option: { action: this.props.load, url: "/role", method: "get" } },
                { name: 'create', option: { action: this.create, url: "/role", method: "post" } },
                { name: 'update', option: { action: this.update, url: "/role/{id}", method: "put" } },
                { name: 'remove', option: { action: this.remove, url: "/role/{id}", method: "delete" } }
            ],
            action: [
                { name: '设置权限', class: "fa fa-cog", option: { action: this.setPrivilege, url: "/rolePrivilege/{roleId}", method: "put" }, isSelect: true }, // isSelect是否需要选中数据
            ],
            columns: [
                { field: "id", title: 'id', width: 200, class: 'hide' },
                { field: "name", title: '名称', width: '50%' },
                { field: "status", title: '状态', width: '49%', template: (row) => {
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
