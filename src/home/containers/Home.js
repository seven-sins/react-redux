/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import Top from '../components/Top.js';
import css from './Home.less';
import Left from '../components/Left.js';
import bootstrap from '../../assets/fonts/less/font-awesome.less';
import s1 from '../../assets/sevensins/seven.css';
import s2 from '../../assets/sevensins/seven.js';

class Home extends Component{
    render = () =>{
        return(
            <div>
                <Top />
                <div>
                    <Left />
                </div>
                <div className='center-container'>
                    <div className='content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
