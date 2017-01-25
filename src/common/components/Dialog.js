import React, { Component } from 'react';
import './Dialog.less';

class Dialog extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }
    componentDidMount = () => {
        let { width, height } = this.props;
        if(!width){
            width = 500;
        }
        if(!height){
            height = 333;
        }
        s(this.refs.container).width(width).height(height).center().drag({ dom: this.refs.title }); // 拖拽事件仅点击title才触发
    };
    remove = () => {
        this.props.dialog('');
    };
    render = () => {
        let { title } = this.props;
        title = title ? title : "Dialog";
        return (
            <div>
                <div className="dialog" ref="container">
                    <div className="dialog-title" ref="title">
                        { title }
                        <i className="fa fa-close dialog-close" onClick={ this.remove.bind(this) }> </i>
                    </div>
                    <div className="dialog-content">
                        {this.props.children}
                    </div>
                </div>
                <div className="dialog-shadow"></div>
            </div>
        )
    }
}
export default Dialog;