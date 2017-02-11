/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import GridTree from '../../common/components/GridTree';
import Dialog from '../../common/components/Dialog';
import Privilege from './Privilege';
import { Base } from '../../common/common';

@connect( state =>({ data: state.Privilege.data, total: state.Privilege.total }), ActionCreators )
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
                            <Privilege { ...this.method() } />
                        </Dialog>)
    };
    update = (model) =>{
        let dialogParams = { width: 500, height: 366, title: "编辑", dialog: this.dialog };
        let privilegeParams = Object.assign( { privilege: model, changeIndex: this.refs.grid.changeIndex }, { ...this.method() } );
        this.dialog(   <Dialog { ...dialogParams }>
                            <Privilege { ...privilegeParams } />
                        </Dialog>)
    };
    remove = (model) =>{
        this.props.remove(model);
    };
    render = () =>{
        let { data, total } = this.props;
        let grid = {
            toolbar: [
                { name: 'load', option: { action: this.props.load } },
                { name: 'create', option: { action: this.create } },
                { name: 'update', option: { action: this.update } },
                { name: 'remove', option: {  action: this.remove } }
            ],
            columns: [
                { field: "id", title: 'id', width: 200, class: 'hide' },
                { field: "name", title: '名称', width: '20%', template: (row) => {
                    if(row.type === 0){
                        return <span style={{ color: 'green' }}>{ row.name }</span>;
                    }else{
                        return <span style={{ color: 'blue', padding: '0 0 0 13px' }}>{ row.name }</span>;
                    }
                } },
                { field: "type", title: '类型', width: '10%', template: (row) => {
                    if(row.type === 0){
                        return <span style={{ color: 'green' }}>模块</span>;
                    }else{
                        return <span style={{ color: 'blue' }}>接口</span>;
                    }
                } },
                { field: "menuCategoryName", title: '菜单分类', width: '15%' },
                { field: "url", title: 'URL', width: '23%' },
                { field: "position", title: '排序', width: '6%', template: row => {
                    if(row.type === 0){
                        return <span style={{ color: 'green' }}>{ row.position }</span>;
                    }else{
                        return <span style={{ color: 'blue' }}>{ row.position }</span>;
                    }
                }},
                { field: "method", title: '请求方式', width: '15%' },
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
                <GridTree { ... grid } ref="grid" />
                { this.state.dialog }
            </div>
        )
    }
}

export default Index;
