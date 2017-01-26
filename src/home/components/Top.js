/**
 * Created by seven sins on 1/7/2017.
 */
import React, { Component, PropTypes } from 'react';
import './Top.less';

class Top extends Component{
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
            <div className='top-container'>
                Top
            </div>
        )
    }
}

export default Top;
