import React, { Component } from 'react';
import './Grid.less';
import Pager from './Pager';

class Grid extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            model: null,
            total: 1,
            data: [],
            index: 1,
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
                    case 'load':
                        this.reload = action;// load 不添加按钮
                        return "";
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
                    <a key={ index } className='link-btn' onClick={ action }><i className={ className }> </i><span>{ name }</span></a>
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
                let width = item.width ? item.width + 'px' : 'auto';
                return (
                    <li key={ index } className={ className } style={{ width: width }} >{ item.title }</li>
                )
            })
        }
        if(columnsDom){
            columnsDom = (
                <ul>
                    { columnsDom }
                </ul>
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
                    let width = item_j.width ? item_j.width + "px" : "auto";
                    let className = item_j.class ? item_j.class : '';
                    if(typeof item_j.template === 'function'){
                        return (
                            <li className={ className } style={{ width: width }} key={ index_j }>{ item_j.template(item_i) }</li>
                        )
                    }
                    return (
                        <li className={ className } style={{ width: width }} key={ index_j }>{ value }</li>
                    )
                });
                return (
                    <ul onClick={ this.select.bind(this, item_i) } key={ index_i }>{ td }</ul>
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
    reload = () => {
        // 初始化参数传入load替换此方法
    };
    create = () => {
        this.state.create()
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
    };
    load = (filter) => {
        let { index } = filter;
        index = index ? index : 1;
        this.setState({
            index: index,
            model: null
        }, () => {
            this.reload(filter);
            s(".grid-content ul").removeClass("active");
        });
    };
    changeIndex = (index) => {
        this.setState({
            index: index,
            model: null
        })
    };
    componentDidMount = () => {
        let { toolbar, columns } = this.props;
        let toolbarDom = this.initToolbar(toolbar);
        let columnsDom = this.initColumns(columns);
        this.setState({
            toolbarDom: toolbarDom,
            columnsDom: columnsDom
        });
    };
    componentDidUpdate = () => { // 设置容器高度
        let containerHeight = document.getElementById("content").clientHeight;
        this.refs.container.style.height = (containerHeight - 96) + "px";
        this.refs.content.style.height = (this.refs.container.style.height - this.refs.head.style.height) + "px";
    };
    componentWillReceiveProps = (nextProps) => { // 新增、删除等操作加载数据后 页面重置
        if(nextProps.total !== this.state.total){
            this.setState({
                total: nextProps.total,
                model: null,
                index: 1
            }, () => {
                s(".grid-content ul").removeClass("active");
            });
        }else if(nextProps.data !== this.state.data){
            this.setState({
                data: nextProps.data,
                model: null,
                index: 1
            }, () => {
                s(".grid-content ul").removeClass("active");
            })
        }
    };
    render = () => {
        let { toolbarDom, columnsDom } = this.state;
        let {  columns, data, total } = this.props;
        let dataDom = this.initData(columns, data);
        let pagerOption = { total: total, load: this.load, index: this.state.index, changeIndex: this.changeIndex };
        if(!dataDom){
            return (
                <div className='grid' ref="container">
                    <div className='grid-head' ref="head"></div>
                    <div className='grid-content' ref="content"></div>
                </div>
            )
        }
        return (
            <div>
                <div className='grid'>
                    { toolbarDom }
                    <div className="grid-container" ref="container">
                        <div className='grid-head' ref="head">
                            { columnsDom }
                        </div>
                        <div className='grid-content' ref="content">
                            { dataDom }
                        </div>
                    </div>
                </div>
                <Pager { ...pagerOption } />
            </div>
        )
    }
}
export default Grid;