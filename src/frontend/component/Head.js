/**
 * Created by seven sins on 2/18/2017.
 */
import React, { Component } from 'react';
import './Head.less';

class Head extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            load: false
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        return !this.state.load;
    };
    componentDidMount = () => {
        this.setState({ load: true });
        let _this = this.refs.border;
        _this.top = _this.offsetTop;
        _this.left = _this.offsetLeft;
        s(_this).drag({ callback: () => {
            s(_this).animateEx({ position: { top: _this.top, left: _this.left }, duration: 666, easing: 'elasticOut', callback: () => {
                _this.flag = false;
            } });
        }});
        this.refs.text.onmouseenter = (ev) => {
            if(!_this.flag){
                // 计算鼠标移入方向
                let x = ev.pageX;
                let y = ev.pageY;
                let thisX = s(this.refs.text).left() + (s(this.refs.text).width() / 2); // x中心点
                let thisY = s(this.refs.text).top() + (s(this.refs.text).height() / 2); // y中心点
                // console.log("x:" + x + "    y:" + y + "     thisX:" + thisX + "     thisY:" + thisY);
                let left = x > thisX ? (_this.left - 66) : (_this.left + 66);
                let top = y > thisY ? (_this.top - 33) : (_this.top + 33);
                //
                _this.flag = true;
                _this.style.top = top + "px";
                //_this.style.left = left + "px";
                s(_this).animateEx({ position: { top: _this.top }, duration: 333, easing: 'elasticOut', callback: () => {
                    _this.flag = false;
                } });
            }
        };
    };
    render = () => {
        return(
            <div className="index-head">
                <div className="head-border" ref="border">
                    <div className="head-text" ref="text">
                        C++是史上最好的语言
                    </div>
                </div>
                <div className="head-disk"></div>
                <div className="head-image-1"></div>
                <div className="head-image-2"></div>
                <div className="head-image-3"></div>
            </div>
        )
    }
}
export default Head;