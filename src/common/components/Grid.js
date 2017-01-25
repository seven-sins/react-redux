import React, { Component } from 'react';
import { http } from '../common';
import css from './Grid.less';
import Pager from './Pager';

class Grid extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            model: null,
            create: ()=>{},
            update: ()=>{},
            remove: ()=>{},
            toolbarDom: null,
            columnsDom: null,
            dataDom: null,
            pagerOption: {}
        }
    }
    initToolbar = (toolbar) => {
        let toolbarContent = '';
        if(toolbar){
            toolbarContent = toolbar.map( (item, index) => {
                let name = item.name;
                let className = '';
                let action = null;
                if(item.option){
                    if(item.option.class){
                        className = item.option.class;
                    }
                    if(item.option.action){
                        action = item.option.action;
                    }
                }
                switch(name){
                    case 'create':
                        name = '添加';
                        this.setState({
                            create: action
                        });
                        action = this.create;
                        break;
                    case 'update':
                        name = '编辑';
                        this.setState({
                            update: action
                        });
                        action = this.update;
                        break;
                    case 'remove':
                        name = '删除';
                        this.setState({
                            remove: action
                        });
                        action = this.remove;
                        break;
                    default:
                        break;
                }
                return (
                    <a key={ index } className='link-btn' onClick={ action }><i className={ className }></i><span>{ name }</span></a>
                )
            });
            if(toolbarContent){
                toolbarContent = (
                    <ul className='toolbar'>
                        { toolbarContent }
                    </ul>
                )
            }
        }
        return toolbarContent;
    };
    initColumns = (columns) => {
        let columnsDom = null;
        if(columns && columns.length > 0){
            columnsDom = columns.map( (item, index) => {
                let className = item.class ? item.class : '';
                let width = item.width ? item.width + 'px' : '';
                return (
                    <th key={ index } className={ className } width={ width } >{ item.title }</th>
                )
            })
        }
        if(columnsDom){
            columnsDom = (
                <tr>
                    { columnsDom }
                </tr>
            )
        }
        return columnsDom;
    };
    initData = (columns, data) => {
        if(!data){
            return null;
        }
        let dataDom = null;
        if(data.length > 0){
            dataDom = data.map( (item_i, index_i) => {
                let td = '';
                td = columns.map( (item_j, index_j) => {
                    let field = item_j["field"];
                    let value = item_i[field];
                    let className = '';
                    if(item_j.class){
                        className=item_j.class;
                    }
                    if(typeof item_j.template === 'function'){
                        return (
                            <td className={ className } key={ index_j }>{ item_j.template(item_i) }</td>
                        )
                    }
                    return (
                        <td className={ className } key={ index_j }>{ value }</td>
                    )
                });
                return (
                    <tr onClick={ this.select.bind(this, item_i) } key={ index_i }>{ td }</tr>
                )
            });
        }
        return dataDom;
    };
    select = (obj, ev) => {
        ev = ev || window.event;
        ev.preventDefault();
        this.setState({
            model: obj
        });
        s(ev.currentTarget).siblings().removeClass('active');
        s(ev.currentTarget).addClass('active');
    };
    create = () => {
        this.state.create();
    };
    update = () => {
        if(!this.state.model){
            s.alert('请选择数据');
            return false;
        }
        this.state.update(this.state.model);
    };
    remove = () => {
        if(!this.state.model){
            s.alert('请选择数据');
            return false;
        }
        this.state.remove(this.state.model);
        this.setState({
            model: null
        });
        s(".grid-content tr").removeClass("active");
    };
    componentDidMount = () => {
        let { toolbar, columns } = this.props;
        let toolbarDom = this.initToolbar(toolbar);
        let columnsDom = this.initColumns(columns);
        this.setState({
            toolbarDom: toolbarDom,
            columnsDom: columnsDom
        }, () => {
            // console.log("done.")
        });
    };
    componentDidUpdate = () => {
        let containerHeight = document.getElementById("content").clientHeight;
        this.refs.grid.style.height = (containerHeight - 163) + "px";
    };
    render = () => {
        let { toolbarDom, columnsDom } = this.state;
        let {  columns, data, total } = this.props;
        let dataDom = this.initData(columns, data);
        let pagerOption = { total: total, index: 1 };
        if(!dataDom){
            return (
                <div className='grid' ref="grid"></div>
            )
        }
        return (
            <div>
                <div className='grid' ref="grid">
                    { toolbarDom }
                    <table className='grid-content'>
                        <thead>
                            { columnsDom }
                        </thead>
                        <tbody>
                            { dataDom }
                        </tbody>
                    </table>
                </div>
                <Pager { ...pagerOption } />
            </div>
        )
    }
}
export default Grid;