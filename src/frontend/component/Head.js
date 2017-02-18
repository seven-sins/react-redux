/**
 * Created by seven sins on 2/18/2017.
 */
import React, { Component } from 'react';
import './Head.less';

class Head extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render = () => {
        return(
            <div className="index-head">
                <div className="head-border">
                    <div className="head-text">
                        C++是史上最好的语言
                    </div>
                </div>
                <div className="head-image-1"></div>
                <div className="head-image-2"></div>
                <div className="head-image-3"></div>
            </div>
        )
    }
}
export default Head;