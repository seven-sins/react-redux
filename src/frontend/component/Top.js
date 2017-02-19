/**
 * Created by seven sins on 2/18/2017.
 */
import React, { Component } from 'react';
import './Top.less';

class Top extends Component {
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
        s(".index-top .right span").bind("mouseover", ev => {
            ev = ev || window.event;
            let _this = ev.currentTarget;
            let box = this.refs.box;
            let active = s(".index-top .active").eq(0); // 当前激活元素
            active.addClass("move"); //
            if(active.length > 0){
                if(box.style.left == 0){
                    box.style.left = active.offset().left + "px";
                }
            }
            let left = _this.offsetLeft; // 当前移入元素left值
            s(box).width(s(_this).width()).show().animateEx({ position: { left: left }, duration: 666, easing: 'elasticOut', callback: () => {

            }});
        }).bind("click", ev => {
            ev = ev || window.event;
            let _this = ev.currentTarget;
            s(_this).siblings("span").removeClass("active").removeClass("move");
            s(_this).addClass("active");
            let box = this.refs.box;
            box.modify = true;
        }).bind("mouseout", ev => {
            ev = ev || window.event;
            let box = this.refs.box;
            if(box.modify){
                box.modify = false;
            }else{
                let active = s(".index-top .active").eq(0);
                let left = active.offset().left;
                let width = active.width();
                s(box).width(width).show().animateEx({ position: { left: left }, duration: 666, easing: 'elasticOut', callback: () => {
                    s(box).hide();
                    active.siblings("span").removeClass("move");
                }});
            }
        })
    };
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
                        <div className="bg-box" ref="box"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Top;