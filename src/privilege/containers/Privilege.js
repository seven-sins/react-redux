/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import DropDownList from '../../common/components/DropDownList';
import { validate } from '../../common/components/Validator';

class Privilege extends Component{
    constructor(props, context){
        super(props, context);
    }
    save = (ev) =>{
        if(!validate.validate(this.refs.form)){
            // 数据验证失败，不提交
            return;
        }
        ev.preventDefault();
        let privilege = s(this.refs.form).serialize();
        privilege.status = this.refs.status.value();
        privilege.method = this.refs.method.value();
        privilege.type = this.refs.type.value();
        privilege.parentId = this.refs.parentId.value();
        this.props.save(privilege, () => {
            this.props.dialog();
            this.props.changeIndex ? this.props.changeIndex.call(this, 1) : null;
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
        let { privilege } = this.props;
        if(!privilege) privilege = {};
        let methodParams = { value: privilege.method, id: 'id', text: 'text', empty: false, data: [{ id: 'get', text: 'get'}, { id: 'post', text: 'post'}, { id: 'put', text: 'put'}, { id: 'delete', text: 'delete'}]};
        let statusParams = { value: privilege.status, id: 'id', text: 'text', empty: false, data: [{ id: 0, text: '启用'}, { id: 1, text: '禁用'}]};
        let typeParams = { value: privilege.type, id: 'id', text: 'text', empty: false, data: [{ id: 1, text: '模块'}, { id: 2, text: '接口'}]};
        let moduleParams = { value: privilege.parentId ? privilege.parentId : 0, id: 'id', text: 'name', url: '/privilege/list', empty: false, init: [{ id: 0, name: '无'}] };
        return(
            <div className='form'>
                <form ref='form'>
                    <ul className='item'>
                        <li className='hide'>
                            <span className='label'>Id: </span><input type='text' className='input' defaultValue={ privilege.id } name='id' />
                        </li>
                        <li>
                            <span className='label'>名称:</span><input type='text'  className='input' defaultValue={ privilege.name } name='name' data-rule="require:true, max:30" />
                        </li>
                        <li>
                            <span className='label'>URL:</span><input type='text'  className='input' defaultValue={ privilege.url } name='url' data-rule="require:true" />
                        </li>
                        <li>
                            <span className='label'>请求方式:</span><DropDownList ref='method' { ...methodParams } rule="require:true"  />
                        </li>
                        <li>
                            <span className='label'>类型:</span><DropDownList ref='type' { ...typeParams } rule="require:true" />
                        </li>
                        <li>
                            <span className='label'>所属模块:</span><DropDownList ref='parentId' { ...moduleParams } />
                        </li>
                        <li>
                            <span className='label'>状态:</span><DropDownList ref='status' { ...statusParams } rule="require:true" />
                        </li>
                        <li>
                            <span className='label'>排序:</span><input type='text' className='input' defaultValue={ privilege.position } name='position' data-rule="type:number" />
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
export default Privilege;
