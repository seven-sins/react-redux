/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Grid from '../../common/components/Grid';
import Dialog from '../../common/components/Dialog';
import TopicCategory from './TopicCategory';
import { Base } from '../../common/common';

@connect( state =>({ data: state.TopicCategory.data, total: state.TopicCategory.total }), ActionCreators )
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
                            <TopicCategory { ...this.method() } />
                        </Dialog>)
    };
    update = (model) =>{
        let dialogParams = { width: 500, height: 366, title: "编辑", dialog: this.dialog };
        let topicCategoryParams = Object.assign( { topicCategory: model, changeIndex: this.refs.grid.changeIndex }, { ...this.method() } );
        this.dialog(   <Dialog { ...dialogParams }>
                            <TopicCategory { ...topicCategoryParams } />
                        </Dialog>)
    };
    remove = (model) =>{
        this.props.remove(model);
    };
    render = () =>{
        let { data, total } = this.props;
        let grid = {
            toolbar: [
                { name: 'load', option: { action: this.props.load, url: "/topicCategory", method: "get" } },
                { name: 'create', option: { action: this.create, url: "/topicCategory", method: "post" } },
                { name: 'update', option: { action: this.update, url: "/topicCategory/{id}", method: "put" } },
                { name: 'remove', option: {  action: this.remove, url: "/topicCategory/{id}", method: "delete" } }
            ],
            columns: [
                { field: "id", title: 'id', width: 200, class: 'hide' },
                { field: "name", title: '名称', width: '35%' },
                { field: "position", title: '排序', width: '35%' },
                { field: "status", title: '状态', width: '29%', template: (row) => {
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
