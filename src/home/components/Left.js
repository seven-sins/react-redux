/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './Left.less';
import { menu } from '../../common/common';

class Left extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            menu: menu
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        if(menu.length !== this.state.menu.length){
            this.setState({
                menu: menu
            }, () => {
                this.forceUpdate();
            });
            return true;
        }else{
            return false;
        }
    };
    render = () =>{
        let menu = '';
        if(this.state.menu.length > 0){
            menu = this.state.menu.map( (item, index) => {
                return (
                    <li key={ index }><i className='fa fa-file-text-o'> </i><Link to={ item.url }>{ item.name }</Link></li>
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