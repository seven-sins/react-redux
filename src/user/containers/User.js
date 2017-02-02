/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import DropDownList from '../../common/components/DropDownList';
import { validate } from '../../common/components/Validator';

class User extends Component{
    constructor(props, context){
        super(props, context);
    }
    save = (ev) =>{
        if(!validate.validate(this.refs.form)){ // 验证容器下所有含data-rule属性的dom
            // 数据验证失败，不提交
            return;
        }
        ev.preventDefault();
        let user = s(this.refs.form).serialize();
        user.roleId = this.refs.roleId.value();
        user.status = this.refs.status.value();
        this.props.save(user, () => {
            this.props.dialog();
            this.props.load();
        });
    };
    componentDidMount = () => {
        // 初始化验证规则
        validate.init(this.refs.form);
    };
    cancel = () => {
        this.props.dialog();
    };
    render = () =>{
        let { user } = this.props;
        if(!user) user = {};
        let roleParams = { value: user.roleId, id: 'id', text: 'name', url: '/role?status=0' }; // role dropdownlist参数
        let statusParams = { value: user.status, id: 'id', text: 'text', data: [{ id: 0, text: '启用'}, { id: 1, text: '禁用'}]};
        return(
            <div className='form'>
                <form ref='form'>
                    <ul className='item'>
                        <li className='hide'>
                            <span className='label'>Id: </span><input type='text' className='input' defaultValue={ user.id } name='id' />
                        </li>
                        <li>
                            <span className='label'>角色:</span><DropDownList ref='roleId' { ...roleParams } rule="require:true"  />
                        </li>
                        <li>
                            <span className='label'>用户名:</span><input type='text'  className='input' defaultValue={ user.userName } name='userName' data-rule="require:true, max:20" />
                        </li>
                        <li>
                            <span className='label'>昵称:</span><input type='text'  className='input' defaultValue={ user.nickName } name='nickName' data-rule="require:true"  />
                        </li>
                        <li>
                            <input type='password' className='hide' />
                            <span className='label'>密码:</span><input type='password' className='input'  defaultValue={ user.passWord } name='passWord'  />
                        </li>
                        <li>
                            <span className='label'>邮箱:</span><input type='text'  className='input' defaultValue={ user.email } name='email' data-rule="type: email" />
                        </li>
                        <li>
                            <span className='label'>电话:</span><input type='text'  className='input' defaultValue={ user.phoneNumber } name='phoneNumber' data-rule="type:number" />
                        </li>
                        <li>
                            <span className='label'>状态:</span><DropDownList ref='status' { ...statusParams } rule="require:true" />
                        </li>
                    </ul>
                </form>
                <ul className='toolbar'>
                    <span onClick={ this.save } className='link-btn save'><i className='fa fa-plus'> </i><span>保存</span></span>
                    <span onClick={ this.cancel } className='link-btn'><i className='fa fa-remove'> </i><span>取消</span></span>
                </ul>
            </div>
        )
    }
}
User.propTypes = {
    //insert: PropTypes.func.isRequired
};
export default User;
