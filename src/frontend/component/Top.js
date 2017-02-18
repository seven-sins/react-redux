/**
 * Created by seven sins on 2/18/2017.
 */
import React, { Component } from 'react';
import './Top.less';

class Top extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render = () => {
        return(
            <div className="index-top">
                <div className="content">
                    <div className="left"></div>
                    <div className="right">
                        <span className="active">最新</span>
                        <span>java</span>
                        <span>html/css</span>
                        <span>javascript</span>
                        <span>cocos2dx</span>
                        <span>c/c++</span>
                        <span>其他</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Top;