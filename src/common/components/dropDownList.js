/**
 * Created by seven sins on 1/15/2017.
 */
import React, { Component, PropTypes } from 'react';
import { http } from '../common'
import css from './DropDownList.less'

// eg:
//      let param = { value: user.roleId, id: 'id', text: 'name', url: '/role' };
//      <DropDownList ref='roleId' { ...param } />
class DropDownList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            timer: null,
            id: null,
            text: null,
            idField: null,
            textField: null,
            data: [],
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
                data: data
            });
            return false;
        }
        fetch(http.srvUrl + url, { headers: http.headers, method: 'GET'  } ).then( response => response.json() )
            .then(res => {
                if(res.code == 0){
                    this.setState({
                            data: res.data
                    });
                }else{
                    s.alert(res.message);
                }
            })
            .catch(e => { });
    };
    componentDidMount = () =>{
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
            this.state.timer = setTimeout( () => { this.refs.list.style.display = 'none'; }, 300 );
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
        return (
            <div className='drop-down-list'>
                <span className="input" ref="el"><span ref="text" className="show-text">请选择</span><i className="icon fa fa-caret-down"></i></span>
                <ul ref='list'>
                    <li className='empty' onClick={this.select}>空</li>
                    {
                        this.state.data.length > 0 && this.state.data.map((item, index) => {
                            let id = item[this.state.idField];
                            let text = item[this.state.textField];
                            if(this.state.value !== null && this.state.value !== '' && this.state.value == id){
                                this.refs.text.innerText = text;
                            }
                            return(
                                <li key={id} data-id={id} onClick={this.select}>{text}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default DropDownList;