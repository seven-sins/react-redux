/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './Left.less';

class Left extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            menu: MENUS
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        if(MENUS.length !== this.state.menu.length){
            this.setState({
                menu: MENUS
            }, () => {
                this.forceUpdate();
            });
            return true;
        }else{
            return false;
        }
    };
    toggle = ev => {
        ev = ev || window.event;
        ev.preventDefault();
        if(s(ev.currentTarget.parentNode).hasClass("menu-close")){
            s(ev.currentTarget.parentNode).removeClass("menu-close");
        }else{
            s(ev.currentTarget.parentNode).addClass("menu-close");
        }
    };
    clickItem = ev => {
        ev = ev || window.event;
        ev.preventDefault();
        s(ev.currentTarget).siblings().removeClass("active");
        s(ev.currentTarget).addClass("active");
    };
    render = () =>{
        let menu = '';
        if(this.state.menu.length > 0){
            menu = this.state.menu.map( (item, index) => {
                let list = "";
                if(item.children && item.children.length > 0){
                    list = item.children.map( item => {
                        return(
                            <li key={ item.id } onClick={ this.clickItem }>
                                <Link activeClassName="active" to={ item.url }><i className='fa fa-file-text-o'> </i>{ item.name }</Link>
                            </li>
                        )
                    })
                }
                return (
                    <div className="menu-item">
                        <div className="menu-title" onClick={ this.toggle }>
                            { item.name }
                            <i className="fa fa-caret-down title-down"> </i>
                            <i className="fa fa-caret-left title-left"> </i>
                        </div>
                        <ul>
                            { list }
                        </ul>
                    </div>
                )
            })
        }
        return(
            <div className='left-container'>
                <ul className='nav'>
                    { menu }
                </ul>
            </div>
        )
    }
}

export default Left;