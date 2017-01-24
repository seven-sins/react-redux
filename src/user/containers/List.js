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
    select = (user, ev) =>{
        ev.preventDefault();
        this.state.user = user;
        s(".grid-content tbody tr").removeClass('active').each( (item) =>{
            let id = s(item).find('td').eq(0).text();
            if(id == user.id){
                s(item).addClass('active');
                return false;
            }
        })
    };
    toInsert = (ev) =>{
        ev.preventDefault();
        this.props.toInsert();
        hashHistory.push("/user");
    };
    toUpdate = (ev) =>{
        ev.preventDefault();
        if(!this.state.user){
            s.alert('请选择数据');
            return false;
        }
        this.props.toUpdate(this.state.user);
        hashHistory.push("/user");
    };
    remove = (ev) =>{
        ev.preventDefault();
        if(!this.state.user){
            s.alert('请选择数据');
            return false;
        }
        let _this = this;
        let _list = this.props.list;
        let _copy = [];
        for(let i=0; i<_list.length; i++){
            _copy.push(_list[i]);
        }
        s.confirm({
            msg: '确定删除选中数据吗？',
            title:'系统消息',
            confirm:function(){
                _this.props.remove(_this.state.user, _copy, _this.state.total);
            }
        });
    };
    render = () =>{
        let { data, total } = this.props;
        let json = {
            toolbar: [
                { name: '添加', option: { class: 'fa fa-plus', action: this.toInsert } },
                { name: '编辑', option: { class: 'fa fa-edit', action: this.toUpdate } }
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
