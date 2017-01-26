/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './Left.less';

class Left extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            load: false
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        if(!this.state.load){
            this.setState({
                load: true
            });
            return true;
        }else{
            return false;
        }
    };
    render = () =>{
        return(
            <div className='left-container'>
                <ul className='nav'>
                    <li><i className='fa fa-file-text-o'> </i><Link to="/">首页</Link></li>
                    <li><i className='fa fa-file-text-o'> </i><Link to="/user">用户管理</Link></li>
                </ul>
            </div>
        )
    }
}

export default Left;