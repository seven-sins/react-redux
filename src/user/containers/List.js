/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import { Link } from 'react-router';
import { browserHistory, hashHistory } from 'react-router';
import Pager from '../../common/components/Pager';

@connect( state =>({ list: state.UserList }), ActionCreators )
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
                _this.props.remove(_this.state.user, _copy);
            }
        });
    };
    render = () =>{
        let { list } = this.props;
        return(
            <div className='grid'>
                <ul className='toolbar'>
                    <a className='link-btn' onClick={ this.toInsert }><i className='fa fa-plus'></i><span>添加</span></a>
                    <a className='link-btn' onClick={ this.toUpdate }><i className='fa fa-edit'></i><span>编辑</span></a>
                    <a className='link-btn' onClick={ this.remove }><i className='fa fa-remove'></i><span>删除</span></a>
                </ul>
                <table className='grid-content'>
                    <thead>
                        <tr>
                            <th className='hide'>ID</th>
                            <th>角色</th>
                            <th>用户名</th>
                            <th>昵称</th>
                            <th>电话</th>
                            <th>邮箱</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.length > 0 && list.map((item, index) => {
                                let id = item.id;
                                return(
                                    <UserItem key={id} item={item} select = { this.select } />
                                )
                            })
                        }
                    </tbody>
                </table>
                <Pager load={ this.load } total={ this.state.total } />
            </div>
        )
    }
}
List.propTypes = {
    //
};

class UserItem extends Component {
    render = () =>{
        let { item, select } = this.props;
        let status;
        if(item.status === 0){
            status = <span style={{color:'green'}}>启用</span>;
        }else{
            status = <span style={{color:'#f00'}}>禁用</span>;
        }
        return (
            <tr onClick={ select.bind(this, item) }>
                <td className='hide'>{ item.id }</td>
                <td>{ item.role ? item.role.name : '' }</td>
                <td>{ item.userName }</td>
                <td>{ item.nickName }</td>
                <td>{ item.email }</td>
                <td>{ item.phoneNumber }</td>
                <td>{ status }</td>
            </tr>
        )
    }
}

export default List;
