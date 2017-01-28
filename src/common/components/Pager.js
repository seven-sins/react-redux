/**
 * Created by seven sins on 1/15/2017.
 */
import React, { Component, PropTypes } from 'react';
import './Pager.less';
import DropDownList from './DropDownList';

class Pager extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            total: 0, // 总数目
            index: 1, // 当前页
            size: 20,
            pageCount: 1
        }
    }
    countPage = (nextProps) =>{
        let { total, index } = this.props;
        if(nextProps){
            total = nextProps.total;
            index = nextProps.index;
        }
        if(!total) total = 1;
        if(!index) index = 1;
        let pageSize = this.state.size;

        // 计算总页码
        let pageCount = Math.floor((total + pageSize - 1 ) / pageSize);

        this.setState({
            total: total,
            index: index,
            pageCount: pageCount
        }, () => {
            this.refs.index.value = index;
            this.forceUpdate();
        })
    };
    componentDidMount = () => {
        this.countPage();
    };
    shouldComponentUpdate = (nextProps, nextState) => {
        if( nextProps.total !== this.state.total || nextProps.index !== this.state.index ){
            this.countPage(nextProps);
            return true;
        }else{
            return false;
        }
    };
    handler = (index) => {
        if(index < 1 || index > this.state.pageCount){
            return false;
        }
        this.setState({
            index: index
        }, () => {
            this.props.changeIndex(index);
            this.forceUpdate();
            this.refs.index.value = index;
            this.props.load({ index: this.state.index, size: this.state.size });
        })
    };
    first = () => {
        this.handler(1);
    };
    prev = () => {
        this.handler( this.state.index -1 );
    };
    next = () => {
        this.handler( this.state.index + 1 );
    };
    last = () => {
        this.handler( this.state.pageCount );
    };
    index = (ev) => {
        ev = ev || window.event;
        ev.preventDefault();
        let value = ev.currentTarget.value;
        try{
            value = parseInt(value);
        }catch(e){ value = 1; }
        this.handler( value );
    };
    indexEnter = (ev) => {
        ev = ev || window.event;
        if(ev.keyCode == 13){
            let value = ev.currentTarget.value;
            try{
                value = parseInt(value);
            }catch(e){ value = 1; }
            this.handler( value );
        }
    };
    reload = () => {
        let value = this.refs.index.value;
        try{
            value = parseInt(value);
        }catch(e){ value = 1; }
        this.handler(value);
    };
    render = () => {
        let first = "t-pager t-first ";
        let prev = 't-pager t-prev ';
        let next = 't-pager t-next ';
        let last = 't-pager t-last ';
        if(this.state.index === 1){
            first += ' disabled';
            prev += ' disabled';
        }
        if(this.state.index === this.state.pageCount){
            next += ' disabled';
            last += ' disabled';
        }

        let data = [ { id: 10, text: "10"}, { id: 20, text: "20"}, { id: 50, text: "50"}, { id: 100, text: "100"} ];
        let page = { id: "id", text: "text", data: data, value: this.state.size, empty: false, manual: true };

        return (
            <div className='pager'>
                <span className='pager-center'>
                    <DropDownList { ...page } ref="size" />
                    <span className="separator"> </span>
                    <span className={ first }><a className="t-pager-icon first" onClick={ this.first }> </a></span>
                    <span className={ prev }><a className="t-pager-icon prev" onClick={ this.prev }> </a></span>
                    <span className="t-pager t-index">
                        <input type="text" className="index" defaultValue={ this.state.index } onBlur={ this.index } onKeyDown={ this.indexEnter } ref="index" />
                    </span>
                    <span className={ next }><a className="t-pager-icon next" onClick={ this.next }> </a></span>
                    <span className={ last }><a className="t-pager-icon last" onClick={ this.last }> </a></span>
                    <span className="separator separator2"> </span>
                    <span className="t-pager t-reload"><a className="t-pager-icon reload" onClick={ this.reload }> </a></span>
                    <span className="t-pager total">共 { this.state.pageCount } 页,<i className="place"> </i> { this.state.total } 条记录</span>
                </span>
                <span className='pager-right'>

                </span>
            </div>
        )
    }
}

export default Pager;