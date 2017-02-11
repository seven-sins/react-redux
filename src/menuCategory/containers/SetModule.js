/**
 * Created by seven sins on 2/10/2017.
 */
/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DropDownList from '../../common/components/DropDownList';
import * as ActionCreators from '../actions';
import './SetModule.less';

@connect( state =>({ modules: state.MenuCategory.modules }), ActionCreators )
class SetModule extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount = () => {
      this.props.loadModule();
    };
    init = (menuCategory, modules) => {
        if(modules.length == 0) return "";
        let dom = "";
        dom = modules.map( (item, index) => {
            let isSelect = !!item["menuCategoryId"] && (item["menuCategoryId"] == menuCategory.id);
            return (
                <div className="module-item" key={ index }>
                    <input type="checkbox" className="module-input" defaultChecked={ isSelect } data-id={ item.id } />
                    <span>{ item.name }</span>
                </div>
            )
        });

        return dom;
    };
    cancel = () => {
        this.props.dialog();
    };
    save = () => {
        let { menuCategory } = this.props;
        let moduleIds = [];
        s(".module-list .module-input").each( (item) => {
            if(item.checked){
                moduleIds.push(item.getAttribute("data-id"));
            }
        });
        this.props.saveModule({ id: menuCategory.id, moduleIds: moduleIds }, () => {
            this.props.load(); // 刷新父窗口列表
            this.props.dialog(); // 关闭弹出窗口
            s.alert("操作成功");
        })
    };
    selectAll = () => {
        if(this.refs.selectAll.innerText == '全选'){
            this.refs.selectAll.innerText = '取消';
            s(".module-list .module-input").each( (item) => {
                item.checked = true;
            })
        }else{
            this.refs.selectAll.innerText = '全选';
            s(".module-list .module-input").each( (item) => {
                item.checked = false;
            })
        }
    };
    render = () => {
        let { menuCategory, modules } = this.props;
        let dom = this.init(menuCategory, modules);
        return(
            <div className='form module-container'>
                <div className="module-list">
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
export default SetModule;
