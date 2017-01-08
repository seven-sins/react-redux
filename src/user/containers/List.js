/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import { Link } from 'react-router';

@connect( state =>({list: state.UserList}), ActionCreators )
class List extends Component{
    constructor(props, context){
        super(props, context);
        this.edit = this.edit.bind(this);
    }
    edit = (ev) =>{
        ev.preventDefault();
        s.alert("test");

        return false;
    };
    render = () =>{
        let { list } = this.props;
        return(
            <div className='grid'>
                <ul className='grid-toolbar'>
                    <Link to='user' className='link-btn' onClick={this.edit}><i className='fa fa-plus'></i><span className='add'>添加</span></Link>
                    <Link to='user' className='link-btn'><i className='fa fa-edit'></i><span className='add'>编辑</span></Link>
                    <Link to='user' className='link-btn'><i className='fa fa-remove'></i><span className='add'>删除</span></Link>
                </ul>
                <table className='grid-content'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>用户名</th>
                            <th>昵称</th>
                            <th>电话</th>
                            <th>邮箱</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return(
                                    <UserItem key={index} item={item} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
List.propTypes = {
    //
};

class UserItem extends Component {
    render = () =>{
        let { item } = this.props;
        let status;
        if(item.status === 0){
            status = <span style={{color:'green'}}>正常</span>;
        }else{
            status = <span style={{color:'#f00'}}>禁用</span>;
        }
        return (
            <tr>
                <td>{ item.id }</td>
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
