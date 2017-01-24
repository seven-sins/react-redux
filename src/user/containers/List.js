/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import { Link } from 'react-router';
import { browserHistory, hashHistory } from 'react-router';
import Grid from '../../common/components/Grid.js';

@connect( state =>({ data: state.UserList.data, total: state.UserList.total }), ActionCreators )
class List extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            user: null
        };
    }
    load = (filter) => {
        this.props.loadData(filter);
    };
    componentDidMount = () =>{
        this.load();
    };
    create = () =>{
        this.props.create();
        hashHistory.push("/user");
    };
    update = (model) =>{
        this.props.update(model);
        hashHistory.push("/user");
    };
    remove = (model) =>{
        let _this = this;
        let _list = this.props.data;
        let _copy = [];
        for(let i=0; i<_list.length; i++){
            _copy.push(_list[i]);
        }
        s.confirm({
            msg: '确定删除选中数据吗？',
            title:'系统消息',
            confirm:function(){
                _this.props.remove(model, _copy, _this.props.total);
            }
        });
    };
    render = () =>{
        let { data, total } = this.props;
        let json = {
            toolbar: [
                { name: 'create', option: { class: 'fa fa-plus', action: this.create } },
                { name: 'update', option: { class: 'fa fa-edit', action: this.update } },
                { name: 'remove', option: { class: 'fa fa-edit', action: this.remove } }
            ],
            columns: [
                { field: "id", title: 'id', width: 100, class: 'hide' },
                { field: "roleName", title: '角色', width: 200 },
                { field: "userName", title: '用户名', width: 200 },
                { field: "nickName", title: '昵称', width: 200 },
                { field: "phoneNumber", title: '电话', width: 200 },
                { field: "email", title: '邮箱', width: 200 },
                { field: "status", title: '状态', width: 200, template: (row) => {
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
            <Grid { ... json } />
        )
    }
}

export default List;
