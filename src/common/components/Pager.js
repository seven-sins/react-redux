/**
 * Created by seven sins on 1/15/2017.
 */
import React, { Component, PropTypes } from 'react';
import './Pager.less';

class Pager extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            total: 0, // 总数目
            index: 1, // 当前页
            beginPageIndex: 1, // 开始页
            endPageIndex: 1, // 结束页
            data: []
        }
    }
    countPage = () =>{
        let { total, index } = this.props;
        if(!total) total = 1;
        if(!index) index = 1;
        let pageSize = 20;
        let recordCount = total;

        // 计算总页码
        let pageCount = Math.floor((recordCount + pageSize - 1 ) / pageSize);
        let beginPageIndex = 1;
        let endPageIndex = 1;

        // 计算页码列表的开始索引和结束索引
        // 总页数不多于10页，则全部显示
        if (pageCount <= 10) {
            beginPageIndex = 1;
            endPageIndex = pageCount;
        }
        // 总页数多于10页，则显示当前页附近的共10个页码
        else {
            // (前4个+当前页+后5个)
            beginPageIndex = index - 4;
            endPageIndex = index + 5;
            // 当前面的页码不足4个时，则显示前10个页码
            if (beginPageIndex < 1) {
                beginPageIndex = 1;
                endPageIndex = 10;
            }
            // 当后面的页码不足5个时，则显示后10个页码
            if (endPageIndex > pageCount) {
                endPageIndex = pageCount;
                beginPageIndex = pageCount - 10 + 1;
            }
        }
        let data = [];
        if(pageCount > 1){
            for(let i = beginPageIndex; i<= endPageIndex; i++){
                data.push(i);
            }
        }
        this.setState({
            total: total,
            index: index,
            beginPageIndex: beginPageIndex,
            endPageIndex: endPageIndex,
            data: data
        })
    };
    componentDidMount = () => {
        this.countPage();
    };
    render = () => {
        let prev = 'prev';
        let next = 'next';
        if(this.state.index === 1){
            prev = 'prev disabled';
        }
        if(this.state.index === this.state.endPageIndex){
            next = 'next disabled';
        }
        if(this.state.endPageIndex === 1){
            prev = 'hide';
            next = 'hide';
        }
        return (
            <div className='pager'>
                <span className='pager-center'>
                    <span className={ prev }>上一页</span>
                    {
                        this.state.data && this.state.data.length > 0 && this.state.data.map( (item, index) => {
                            return (
                                <span key={ index } className={ this.state.index === item ? 'number active' : 'number' }>{ item }</span>
                            )
                        })
                    }
                    <span className={ next }>下一页</span>
                </span>
                <span className='pager-right'>

                </span>
            </div>
        )
    }
}

export default Pager;