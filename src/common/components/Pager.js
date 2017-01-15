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
                <div className='pager-left'>

                </div>
                <div className='pager-right'>

                </div>
            </div>
        )
    }
}

export default Pager;