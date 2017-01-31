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
    update = (model) =>{
        let dialogParams = { width: 500, height: 366, title: "编辑", dialog: this.dialog };
        let roleParams = Object.assign( { role: model }, { ...this.method() } );
        this.dialog(   <Dialog { ...dialogParams }>
                            <Role { ...roleParams } />
                        </Dialog>)
    };
    remove = (model) =>{
        let _this = this;
        s.confirm({
            msg: '确定删除选中数据吗？',
            title:'系统消息',
            confirm:function(){
                _this.props.remove(model);
            }
        });
    };
    render = () =>{
        let { data, total } = this.props;
        let grid = {
            toolbar: [
                { name: 'load', option: { class: 'fa fa-plus', action: this.props.load } },
                { name: 'create', option: { class: 'fa fa-plus', action: this.create } },
                { name: 'update', option: { class: 'fa fa-edit', action: this.update } },
                { name: 'remove', option: { class: 'fa fa-remove', action: this.remove } }
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
                <Grid { ... grid } />
                { this.state.dialog }
            </div>
        )
    }
}

export default Index;
