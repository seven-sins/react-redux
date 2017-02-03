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
            day: date.getDate() > 9 ? date.getDate() : '0' + date.getDate(), // 日
            hour: '00', // 时
            minute: '00', // 分
            week : ['一', '二', '三', '四', '五', '六', '日'], // 星期
            firstDayOfWeek: this.getFirstDayOfWeek(date), // 当月的第一天是星期几
            today: date.getDate(), // 当前日期
            all: this.getDays(date), // 当前月的所有天
            value: null, // 默认值
            timer: null
        };
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
        for(let i=1; i<=total; i++){
            all.push(i);
        }
        return all;
    };
    isDate = date => {
        return !isNaN(new Date(date).getFullYear());
    };
    updateDate = (date, callback) => {
        date = isNaN(date.getFullYear()) ? new Date() : date;
        this.setState({
            year: date.getFullYear(),
            month: this.convertNum(date.getMonth() + 1),
            day: date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
            hour: this.convertNum(date.getHours()),
            minute: this.convertNum(date.getMinutes()),
            today: date.getDate(),
            firstDayOfWeek: this.getFirstDayOfWeek(date),
            all: this.getDays(date)
        }, () => {
            if(this.refs.text.value && !this.isDate(this.refs.text.value)){
                this.refs.text.value = this.value();
            }
            if(typeof callback === 'function'){
                callback.call();
            }
        })
    };
    initFormat = fmt => {
        if(!fmt) return;
        this.setState({ format: fmt });
    };
    value = () => {
        let format = this.state.format;
        if (format.match(/yyyy/i)) {
            format = format.replace(/yyyy/i, this.state.year);
        }
        if (format.match(/MM/)) {
            format = format.replace(/MM/, this.state.month);
        }
        if (format.match(/dd/i)) {
            format = format.replace(/dd/i, this.state.day);
        }
        if (format.match(/hh/i)) {
            format = format.replace(/hh/i, this.state.hour);
        }
        if (format.match(/mm/)) {
            format = format.replace(/mm/, this.state.minute);
        }
        return format;
    };
    setText = day => {
        day = parseInt(day);
        day = day > 9 ? day : '0' + day;
        this.setState({ day: day }, () => {
            this.refs.text.value = this.value();
        });
    };
    setDate = (date, callback) => {
        let regex = {
            a: /^\d{4}$/,
            b: /^\d{4}\W{1}\d{1,2}$/,
            c: /^\d{4}\W{1}\d{1,2}\W{1}\d{1,2}$/,
            d: /^\d{4}\W{1}\d{1,2}\W{1}\d{1,2}\s+\d{1,2}$/,
            e: /^\d{4}\W{1}\d{1,2}\W{1}\d{1,2}\s+\d{1,2}\W{1}\d{1,2}$/
        };
        if(regex.a.test(date)){
            date += '/01/01';
            this.updateDate(new Date(date), callback);
        }else if(regex.b.test(date)) {
            date += '/01';
            this.updateDate(new Date(date), callback);
        }else if(regex.c.test(date)){
            this.updateDate(new Date(date), callback);
        }else if(regex.d.test(date)){
            date += ':00';
            this.updateDate(new Date(date), callback);
        }else if(regex.e.test(date)){
            this.updateDate(new Date(date), callback);
        }else if(!isNaN(date)){
            let newDate = new Date();
            newDate.setTime(date);
            this.updateDate(new Date(newDate), callback);
        }else{
            this.showMessage('日期格式错误');
        }
    };
    componentDidMount = () => {
        this.refs.icon.onclick = ev => {
            if(this.refs.date.style.display == 'block'){
                this.refs.date.style.display = 'none';
            }else{
                this.setDate(this.refs.text.value ? this.refs.text.value : this.value());
                this.refs.date.style.display = 'block';
            }
        };
        this.refs.icon.onmouseout = this.refs.date.onmouseout = ev => {
            this.state.timer = setTimeout( () => { this.refs.date.style.display = 'none'; }, 500 );
        };
        this.refs.date.onmousemove = ev => {
            clearTimeout(this.state.timer);
        };
        // 初始化year month day
        let { value, format } = this.props;
        this.initFormat(format);
        if(value){
            this.setDate(value, () => {
                this.refs.text.value = this.value();
            });
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
        ev.preventDefault();
        if(ev.currentTarget.value){
            if(!this.isDate(ev.currentTarget.value)){
                this.setDate(new Date());
            }
            this.showMessage();
        }else{
            this.showMessage('选项不能为空');
        }
    };
    prev = ev => {
        this.setDate(this.getYear(this.state.year, parseInt(this.state.month) - 1) + '/' + this.getMonth(parseInt(this.state.month) - 1) + '/1');
    };
    next = ev => {
        this.setDate(this.getYear(this.state.year, parseInt(this.state.month) + 1) + '/' + this.getMonth(parseInt(this.state.month) + 1) + '/1');
    };
    handlerClick = (day, ev) => {
        this.setText(day);
        this.refs.date.style.display = 'none';
        this.showMessage();
    };
    showMessage = msg => {
        msg = msg ? msg : '';
        let elements = this.refs.datePicker.parentNode.getElementsByClassName('error-msg');
        if(elements.length > 0){
            elements[0].innerHTML = msg;
        }
    };
    enable = (flag) => {
        if(flag === true){
            s(this.refs.shadow).removeClass('i-disabled');
        }else{
            s(this.refs.shadow).addClass('i-disabled');
        }
    };
    render = () => {
        let { rule } = this.props;
        return (
            <div className="date-picker" data-rule={ rule } ref="datePicker">
                <span className="input-wrap" >
                    <span className="input i-shadow " ref="shadow"> </span>
                    <input className="input show-input" type="text" ref="text" onBlur={ this.change } defaultValue={ this.state.value } />
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
                                    <li key={ index } className={ day == 0 ? 'holder' : '' } onClick={ this.handlerClick.bind(this, day)}>
                                        <span className={ day == this.state.today ? 'active' : '' }>{ day }</span>
                                    </li>
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

