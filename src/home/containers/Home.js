/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import Top from '../components/Top.js';
import css from './Home.less';
import Left from '../components/Left.js';
import icon from 'font-awesome-webpack';
import s1 from '../../assets/sevensins/seven.css';
import s2 from '../../assets/sevensins/seven.js';

class Home extends Component{
    constructor(props, context) {
        super(props, context);
    }
    inner = () => {
        if (typeof window.innerWidth != 'undefined') {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        } else {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
    };
    componentDidMount = () =>{
        let inner = this.inner();
        this.refs.container.style.height = (inner.height - 66) + 'px'; // 66 == top的高度
        this.refs.content.style.height = (inner.height - 66 - 30) + 'px'; // 30 == container.padding-top + container.padding-bottom
        this.refs.container.style.maxHeight = (inner.height - 66) + 'px';
        this.refs.content.style.maxHeight = (inner.height - 66 - 30) + 'px';
    };
    render = () =>{
        return(
            <div>
                <Top />
                <div>
                    <Left />
                </div>
                <div className='center-container'  ref='container'>
                    <div className='content' ref='content' id="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
