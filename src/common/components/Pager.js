/**
 * Created by seven sins on 1/15/2017.
 */
import React, { Component, PropTypes } from 'react';
import css from './Pager.less';

class Pager extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render = () => {
        let list = '';
        let { total } = this.props;
        if(total > 0){

        }
        return (
            <div className='pager'>
                <span className='pager-center'>
                    <span className='prev'>上一页</span>
                    <span className='number active'>1</span>
                    <span className='number'>2</span>
                    <span className='number'>3</span>
                    <span className='number'>4</span>
                    <span className='number'>5</span>
                    <span className='number'>6</span>
                    <span className='number'>7</span>
                    <span className='number'>8</span>
                    <span className='number'>9</span>
                    <span className='number'>10</span>
                    <span className='next'>下一页</span>
                </span>
                <span className='pager-right'>

                </span>
            </div>
        )
    }
}

export default Pager;