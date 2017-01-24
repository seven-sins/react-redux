/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import css from './Left.less';

class Left extends Component{
    render = () =>{
        return(
            <div className='left-container'>
                <ul className='nav'>
                    <li><i className='fa fa-file-text-o'></i><Link to="/">首页</Link></li>
                    <li><i className='fa fa-file-text-o'></i><Link to="/user/list">用户管理</Link></li>
                </ul>
            </div>
        )
    }
}

export default Left;