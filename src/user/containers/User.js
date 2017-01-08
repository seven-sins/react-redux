/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import { Link } from 'react-router';
import { browserHistory, hashHistory } from 'react-router';

@connect( state =>({ user: state.User }), ActionCreators )
class User extends Component{
    constructor(props, context){
        super(props, context);
        this.save = this.save.bind(this);
    }
    save = (ev) =>{
        ev.preventDefault();
        let user = {
            id: this.refs.id.value,
            userName: this.refs.userName.value,
            nickName: this.refs.nickName.value,
            passWord: this.refs.passWord.value,
            email: this.refs.email.value,
            phoneNumber: this.refs.phoneNumber.value,
            status: this.refs.status.value
        };
        this.props.save(user, () => { hashHistory.push("/user/list") });
    };
    render = () =>{
        let { user } = this.props;
        if(!user) user = {};
        return(
            <div className='form'>
                <ul className='item'>
                    <li className='hide'>
                        <span className='label'>Id: </span><input type='text' className='input' defaultValue={ user.id } ref='id' />
                    </li>
                    <li>
                        <span className='label'>用户名:</span><input type='text'  className='input' defaultValue={ user.userName } ref='userName'  />
                    </li>
                    <li>
                        <span className='label'>昵称:</span><input type='text'  className='input' defaultValue={ user.nickName } ref='nickName'  />
                    </li>
                    <li>
                        <input type='password' className='hide' />
                        <span className='label'>密码:</span><input type='password' className='input'  defaultValue={ user.passWord } ref='passWord'  />
                    </li>
                    <li>
                        <span className='label'>邮箱:</span><input type='text'  className='input' defaultValue={ user.email } ref='email'  />
                    </li>
                    <li>
                        <span className='label'>电话:</span><input type='text'  className='input' defaultValue={ user.phoneNumber } ref='phoneNumber'  />
                    </li>
                    <li>
                        <span className='label'>状态:</span><input type='text'  className='input' defaultValue={ user.status } ref='status'  />
                    </li>
                </ul>
                <ul className='toolbar'>
                    <span onClick={ this.save } className='link-btn save'><i className='fa fa-plus'></i><span>保存</span></span>
                    <Link to='user/list' className='link-btn'><i className='fa fa-remove'></i><span>取消</span></Link>
                </ul>
            </div>
        )
    }
}
User.propTypes = {
    //insert: PropTypes.func.isRequired
};
export default User;
