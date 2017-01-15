/**
 * Created by seven sins on 1/15/2017.
 */
import React, { Component, PropTypes } from 'react';
import { http } from '../common'

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
        this.refs.el.onkeydown = () => { return false; }; //禁止输入
        this.refs.el.onfocus = () => { this.refs.list.style.display = 'block'; };
        this.refs.el.onblur = () => { this.state.timer = setTimeout(() => { this.refs.list.style.display = 'none'; }, 300); };
        this.load();
    };
    select = (ev) => {
        ev.preventDefault();
        clearTimeout(this.state.timer);
        let dom = ev.target;
        this.state.id = dom.getAttribute('data-id');
        this.state.text = dom.innerText === '空' ? '' : dom.innerText;
        this.refs.el.value = this.state.text;
        this.refs.list.style.display = 'none';
    };
    render = () =>{
        return (
            <div className='drop-down-list'>
                <input type='text' className='input' ref='el' placeholder='请选择' />
                <ul ref='list'>
                    <li className='empty' onClick={this.select}>空</li>
                    {
                        this.state.data.length > 0 && this.state.data.map((item, index) => {
                            let id = item[this.state.idField];
                            let text = item[this.state.textField];
                            if(this.state.value !== null && this.state.value !== '' && this.state.value == id){
                                this.refs.el.value = text;
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