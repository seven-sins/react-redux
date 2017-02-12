/**
 * Created by seven sins on 2/10/2017.
 */
/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDownList from '../../common/components/DropDownList';
import * as ActionCreators from '../actions';
import './SetPrivilege.less';

@connect( state =>({ privileges: state.Role.privileges }), ActionCreators )
class SetPrivilege extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount = () => {
        this.props.loadPrivilege();
    };
    toggle = ev => {
        ev = ev || window.event;
        if(s(ev.currentTarget).siblings(".privilege-item").size() > 0){
            if(s(ev.currentTarget.parentNode).hasClass("item-close")){
                s(ev.currentTarget.parentNode).removeClass("item-close");
            }else{
                s(ev.currentTarget.parentNode).addClass("item-close");
            }
        }
    };
    bubbling = ev => {
        ev = ev || window.event;
        ev.stopPropagation();
    };
    recursion = (id, privileges, parentField) => {
        let dom = [];
        for(let i = 0; i<privileges.length; i++){
            let item = privileges[i];
            if(id == item[parentField]){
                let children = this.recursion(item.id, privileges, "parentId");
                let className = children.length > 0 ? "line " : "line  place";
                let title = (<div className="privilege-title" key={ item.id } onClick={ this.toggle }>
                    <i className={ className }> </i>
                    <input type="checkbox" className="privilege-input" data-id={ item.id } onClick={ this.bubbling } />
                    <span>{ item.name }</span>
                </div>);
                dom.push(
                    <div className="privilege-item">
                        { title }
                        { children }
                    </div>
                )
            }
        }
        return dom;
    };
    init = (role, privileges) => {
        if(privileges.length == 0) return "";
        let dom = [];
        for(let i=0; i<privileges.length; i++){
            let item = privileges[i];
            if(item.type == 0){
                let children = this.recursion(item.id, privileges, "menuCategoryId");
                let className = children.length > 0 ? "line " : "line  place";
                let title = (
                    <div className="privilege-title" key={ item.id } onClick={ this.toggle }>
                        <i className={ className }> </i>
                        <input type="checkbox" className="privilege-input" data-id={ item.id } onClick={ this.bubbling } />
                        <span>{ item.name }</span>
                    </div>
                );
                dom.push(
                    <div className="privilege-item">
                        { title }
                        { children }
                    </div>
                )
            }
        }

        return dom;
    };
    cancel = () => {
        this.props.dialog();
    };
    save = () => {
        let { role } = this.props;
        let privileges = [];
        s(".privilege-list .privilege-input").each( (item) => {
            if(item.checked){
                privileges.push(parseInt(item.getAttribute("data-id")));
            }
        });
        this.props.savePrivilege({ id: role.id, privileges: privileges }, () => {
            this.props.dialog(); // 关闭弹出窗口
            s.alert("操作成功");
        })
    };
    selectAll = () => {
        if(this.refs.selectAll.innerText == '全选'){
            this.refs.selectAll.innerText = '取消';
            s(".privilege-list .privilege-input").each( (item) => {
                item.checked = true;
            })
        }else{
            this.refs.selectAll.innerText = '全选';
            s(".privilege-list .privilege-input").each( (item) => {
                item.checked = false;
            })
        }
    };
    render = () => {
        let { role, privileges } = this.props;
        let dom = this.init(role, privileges);
        return(
            <div className='form privilege-container'>
                <div className="privilege-list">
                    { dom }
                </div>
                <ul className='toolbar'>
                    <span onClick={ this.selectAll } className='link-btn save'><i className='fa fa-toggle-off'> </i><span ref="selectAll">全选</span></span>
                    <span onClick={ this.save } className='link-btn save'><i className='fa fa-plus'> </i><span>保存</span></span>
                    <span onClick={ this.cancel } className='link-btn'><i className='fa fa-remove'> </i><span>取消</span></span>
                </ul>
            </div>
        )
    }
}
export default SetPrivilege;
