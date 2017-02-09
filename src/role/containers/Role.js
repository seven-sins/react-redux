/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import DropDownList from '../../common/components/DropDownList';
import { validate } from '../../common/components/Validator';

class Role extends Component{
    constructor(props, context){
        super(props, context);
    }
    save = (ev) =>{
        if(!validate.validate(this.refs.form)){
            // 数据验证失败，不提交
            return;
        }
        ev.preventDefault();
        let role = s(this.refs.form).serialize();
        role.status = this.refs.status.value();
        this.props.save(role, () => {
            this.props.dialog();
            this.props.changeIndex(1);
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
        let { role } = this.props;
        if(!role) role = {};
        let statusParams = { value: role.status, id: 'id', text: 'text', data: [{ id: 0, text: '启用'}, { id: 1, text: '禁用'}]};
        return(
            <div className='form'>
                <form ref='form'>
                    <ul className='item'>
                        <li className='hide'>
                            <span className='label'>Id: </span><input type='text' className='input' defaultValue={ role.id } name='id' />
                        </li>
                        <li>
                            <span className='label'>名称:</span><input type='text'  className='input' defaultValue={ role.name } name='name' data-rule="require:true, max:20" />
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
export default Role;
