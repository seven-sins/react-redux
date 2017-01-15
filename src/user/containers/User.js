/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import { Link } from 'react-router';
import { browserHistory, hashHistory } from 'react-router';
import DropDownList from '../../common/components/DropDownList';

@connect( state =>({ user: state.User }), ActionCreators )
class User extends Component{
    constructor(props, context){
        super(props, context);
        this.save = this.save.bind(this);
    }
    save = (ev) =>{
        ev.preventDefault();
        let user = s(this.refs.form).serialize();
        user.roleId = this.refs.roleId.state.id;
        console.log(user);
        this.props.save(user, () => { hashHistory.push("/user/list") });
    };
    render = () =>{
        let { user } = this.props;
        if(!user) user = {};
        let param = { value: user.roleId, id: 'id', text: 'name', url: '/role' }; // role dropdownlist参数
        return(
            <div className='form'>
                <form ref='form'>
                    <ul className='item'>
                        <li className='hide'>
                            <span className='label'>Id: </span><input type='text' className='input' defaultValue={ user.id } name='id' />
                        </li>
                        <li>
                            <span className='label'>角色:</span><DropDownList ref='roleId' { ...param } />
                        </li>
                        <li>
                            <span className='label'>用户名:</span><input type='text'  className='input' defaultValue={ user.userName } name='userName' data-rule="require:true, max:30" />
                        </li>
                        <li>
                            <span className='label'>昵称:</span><input type='text'  className='input' defaultValue={ user.nickName } name='nickName' data-rule="require:true"  />
                        </li>
                        <li>
                            <input type='password' className='hide' />
                            <span className='label'>密码:</span><input type='password' className='input'  defaultValue={ user.passWord } name='passWord'  />
                        </li>
                        <li>
                            <span className='label'>邮箱:</span><input type='text'  className='input' defaultValue={ user.email } name='email'  />
                        </li>
                        <li>
                            <span className='label'>电话:</span><input type='text'  className='input' defaultValue={ user.phoneNumber } name='phoneNumber'  />
                        </li>
                        <li>
                            <span className='label'>状态:</span><input type='text'  className='input' defaultValue={ user.status } name='status'  />
                        </li>
                    </ul>
                </form>
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
