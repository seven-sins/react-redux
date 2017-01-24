import React, { Component } from 'react';
import { http } from '../common';
import css from './Grid.less';
import Pager from './Pager';

class Grid extends Component {
    constructor(props, context) {
        super(props, context);
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
        let columnsDom = '';
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
            return '';
        }
        let dataDom = '';
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
                    <tr key={ index_i }>{ td }</tr>
                )
            });
        }
        return dataDom;
    };
    render = () => {
        let { toolbar, columns, action, data, total } = this.props;
        let toolbarDom = this.initToolbar(toolbar);
        let columnsDom = this.initColumns(columns);
        let dataDom = this.initData(columns, data);
        let param = { total: total, index: 1 };
        return (
            <div>
                <div className='grid'>
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
                <Pager { ...param } />
            </div>
        )
    }
}
export default Grid;