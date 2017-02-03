/**
 * Created by seven sins on 2/3/2017.
 */
import React, { Component } from 'react';
import './DatePicker.less';

class DatePicker extends Component {
    constructor(props, context) {
        super(props, context);
        let date = new Date();
        this.state = {
            format: 'yyyy-MM-dd', // 格式， 默认yyyy-MM-dd
            year: date.getFullYear(), // 年
            month: this.convertNum(date.getMonth() + 1), // 月
            day: this.convertNum(1), // 日
            hour: '00', // 时
            minute: '00', // 分
            week : ['一', '二', '三', '四', '五', '六', '日'], // 星期
            firstDayOfWeek: this.getFirstDayOfWeek(date), // 当月的第一天是星期几
            today: date.getDate(), // 当前日期
            all: this.getDays(date) // 当前月的所有天
        };
        console.log(this.state);
    }
    convertNum = num => {
        if(isNaN(num)){
            return '01';
        }
        num = parseInt(num);
        num = num > 12 ? 1 : num;
        return num > 9 ? num : '0' + num;
    };
    getFirstDayOfWeek = date => {
        return new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/1').getDay();
    };
    getDays = date => {
        let firstDayOfWeek = this.getFirstDayOfWeek(date); // 当前月第一天是星期几
        let all = [];
        let total = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // 当前月合计天数
        for(let i=1; i<firstDayOfWeek; i++){
            all.push(0);
        }
        for(let i=1; i<total; i++){
            all.push(i);
        }
        return all;
    };
    updateDate = date => {
        date = isNaN(date.getFullYear()) ? new Date() : date;
        this.setState({
            year: date.getFullYear(),
            month: this.convertNum(date.getMonth() + 1),
            day: this.convertNum(date.getDay()),
            hour: this.convertNum(date.getHours()),
            minute: this.convertNum(date.getMinutes()),
            today: date.getDate(),
            firstDayOfWeek: this.getFirstDayOfWeek(date),
            all: this.getDays(date)
        }, () => {
            console.log(this.state);
        })
    };
    initFormat = fmt => {
        if(!fmt) return;
        this.setState({ format: fmt });
    };
    setDate = date => {
        let regex = {
            a: /^\d{4}$/,
            b: /^\d{4}\W{1}\d{1,2}$/,
            c: /^\d{4}\W{1}\d{1,2}\W{1}\d{1,2}$/,
            d: /^\d{4}\W{1}\d{1,2}\W{1}\d{1,2}\s+\d{1,2}$/,
            e: /^\d{4}\W{1}\d{1,2}\W{1}\d{1,2}\s+\d{1,2}\W{1}\d{1,2}$/
        };
        if(regex.a.test(date)){
            date += '/01/01';
            this.updateDate(new Date(date));
        }else if(regex.b.test(date)) {
            date += '/01';
            this.updateDate(new Date(date));
        }else if(regex.c.test(date)){
            this.updateDate(new Date(date));
        }else if(regex.d.test(date)){
            date += ':00';
            this.updateDate(new Date(date));
        }else if(regex.e.test(date)){
            this.updateDate(new Date(date));
        }
    };
    componentDidMount = () => {
        this.refs.icon.onclick = ev => {
            if(this.refs.date.style.display == 'block'){
                this.refs.date.style.display = 'none';
            }else{
                this.refs.date.style.display = 'block';
            }
        };
        // 初始化year month day
        let { value, format } = this.props;
        value = value ? value : new Date();
        this.initFormat(format);
        if(value){
            this.setDate(value);
        }
    };
    getMonth = month => {
        return (month > 12 ? 1 : month) || (month == 0 ? 12 : month);
    };
    getYear = (year, month) => {
        let _year = parseInt(year);
        if(month > 12){
            _year++;
        }else if(month == 0){
            _year--;
        }
        return _year;
    };
    change = ev => {

    };
    prev = ev => {
        this.setDate(this.getYear(this.state.year, parseInt(this.state.month) - 1) + '/' + this.getMonth(parseInt(this.state.month) - 1) + '/1');
    };
    next = ev => {
        this.setDate(this.getYear(this.state.year, parseInt(this.state.month) + 1) + '/' + this.getMonth(parseInt(this.state.month) + 1) + '/1');
    };
    render = () => {
        return (
            <div className="date-picker">
                <span className="input-wrap">
                    <span className="input i-shadow " ref="shadow"> </span>
                    <input className="input" type="text" onBlur={ this.change } />
                    <i className="icon fa fa-calendar" ref="icon"> </i>
                </span>
                <div className="date-wrap" ref="date">
                    <div className="year-wrap">
                        <span className="text">
                            <span className="i-year" ref="year">{ this.state.year }年</span>
                            <span className="i-month" ref="month">{ this.state.month }月</span>
                        </span>
                        <span className="icon year-left" onClick={ this.prev }><i className="fa fa-caret-left"> </i></span>
                        <span className="icon year-right" onClick={ this.next }><i className="fa fa-caret-right"> </i></span>
                    </div>
                    <ul className="week-wrap">
                        {
                            this.state.week.map( week => {
                                return (
                                    <li key={ week }>{ week }</li>
                                )
                            })
                        }
                    </ul>
                    <ul className="day-wrap">
                        {
                            this.state.all.length > 0 && this.state.all.map( (day, index) => {
                                return (
                                    <li key={ index } className={ day == 0 ? 'holder' : '' }><span className={ day == this.state.today ? 'active' : '' }>{ day }</span></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default DatePicker;

