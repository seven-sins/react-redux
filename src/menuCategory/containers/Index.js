/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Grid from '../../common/components/Grid';
import Dialog from '../../common/components/Dialog';
import MenuCategory from './MenuCategory';
import { Base } from '../../common/common';

@connect( state =>({ data: state.MenuCategory.data, total: state.MenuCategory.total }), ActionCreators )
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
                            <MenuCategory { ...this.method() } />
                        </Dialog>)
    };
    update = (model) =>{
        let dialogParams = { width: 500, height: 366, title: "编辑", dialog: this.dialog };
        let menuCategoryParams = Object.assign( { menuCategory: model, changeIndex: this.refs.grid.changeIndex }, { ...this.method() } );
        this.dialog(   <Dialog { ...dialogParams }>
                            <MenuCategory { ...menuCategoryParams } />
                        </Dialog>)
    };
    remove = (model) =>{
        this.props.remove(model);
    };
    setModule = model => {
        console.log(model);
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
            action: [
                { name: '设置模块', class: "fa fa-edit", option: { action: this.setModule }, isSelect: true }, // isSelect是否需要选中数据
            ],
            columns: [
                { field: "id", title: 'id', width: 200, class: 'hide' },
                { field: "name", title: '名称', width: '60%' },
                { field: "position", title: '排序', width: '39%' }
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
