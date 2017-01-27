/**
 * Created by seven sins on 1/15/2017.
 */
import React, { Component, PropTypes } from 'react';
import { http } from '../common'
import './DropDownList.less'

/**
 * eg:
 *      let param = { value: user.roleId, id: 'id', text: 'name', url: '/role', data: [], empty: false, manual: true };
 *      data: 渲染数据， 此属性与url冲突， 传data属性将忽略url
 *      empty: false 不显示空, 默认显示
 *      manual: true  鼠标移出时不隐藏，需要手动点击选项时才隐藏列表框
 *      <DropDownList ref='roleId' { ...param } />
 */
class DropDownList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            timer: null,
            id: null,
            text: null,
            idField: null,
            textField: null,
            dataSource: [],
            value: null
        };
    }
    load = () => {
        let { url, id, text, data, value } = this.props;
        this.setState({
            idField: id,
            textField: text,
            value: value
        });
        if(data){
            this.setState({
                dataSource: data
            });
            return false;
        }
        fetch(http.srvUrl + url, { headers: http.headers, method: 'GET'  } ).then( response => response.json() )
            .then(res => {
                if(res.code == 0){
                    this.setState({
                        dataSource: res.data
                    }, () => {
                        // console.log("done");
                    });
                }else{
                    s.alert(res.message);
                }
            })
    };
    componentDidMount = () =>{
        let { manual } = this.props;
        this.refs.el.onclick = (ev) => {
            ev.preventDefault();
            if(this.refs.list.style.display === 'block'){
                this.refs.list.style.display = 'none';
            }else{
                this.refs.list.style.display = 'block';
            }
        };
        this.refs.el.onmouseout = this.refs.list.onmouseout = (ev) => {
            ev.preventDefault();
            if(manual !== true){
                this.state.timer = setTimeout( () => { this.refs.list.style.display = 'none'; }, 500 );
            }
        };
        this.refs.list.onmousemove = (ev) => {
            clearTimeout(this.state.timer);
        };
        this.load();
    };
    select = (ev) => {
        ev.preventDefault();
        clearTimeout(this.state.timer);
        let dom = ev.target;
        let id = dom.getAttribute('data-id');
        let text = dom.innerText === '空' ?  '请选择' : dom.innerText;
        this.refs.text.innerText = text;
        this.refs.list.style.display = 'none';
        this.setState({
            id: id,
            text: text
        }, () => {
            // console.log("done")
        })
    };
    render = () =>{
        let showText = '请选择';
        if(this.state.dataSource.length > 0){
            for(let i=0; i<this.state.dataSource.length; i++){
                let item = this.state.dataSource[i];
                let id = item[this.state.idField];
                let text = item[this.state.textField];
                if(this.state.value !== null && this.state.value !== '' && this.state.value == id){
                    showText = text;
                    break;
                }
            }
        }
        let { empty } = this.props;
        empty = empty === false ? "" : <li className='empty' onClick={ this.select }>空</li>;
        return (
            <div className='drop-down-list'>
                <span className="input" ref="el"><span ref="text" className="show-text">{ showText }</span><i className="icon fa fa-caret-down"> </i></span>
                <ul ref='list'>
                    { empty }
                    {
                        this.state.dataSource.length > 0 && this.state.dataSource.map((item, index) => {
                            let id = item[this.state.idField];
                            let text = item[this.state.textField];
                            return(
                                <li key={id} data-id={id} onClick={ this.select }>{text}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default DropDownList;