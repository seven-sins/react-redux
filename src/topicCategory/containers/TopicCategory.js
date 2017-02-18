
import React, { Component, PropTypes } from 'react';
import DropDownList from '../../common/components/DropDownList';
import { validate } from '../../common/components/Validator';

class TopicCategory extends Component{
    constructor(props, context){
        super(props, context);
    }
    save = (ev) =>{
        if(!validate.validate(this.refs.form)){
            // 数据验证失败，不提交
            return;
        }
        ev.preventDefault();
        let topicCategory = s(this.refs.form).serialize();
        topicCategory.status = this.refs.status.value();
        this.props.save(topicCategory, () => {
            this.props.dialog();
            this.props.changeIndex ? this.props.changeIndex.call(this, 1) : null;
            this.props.load();
        });
    };
    componentDidMount = () => {
        // 初始化验证规则
        validate.init(this.refs.form);
    };
    cancel = () => {
        this.props.dialog();
    };
    render = () =>{
        let { topicCategory } = this.props;
        if(!topicCategory) topicCategory = {};
        let statusParams = { value: topicCategory.status, id: 'id', text: 'text', data: [{ id: 0, text: '启用'}, { id: 1, text: '禁用'}]};
        return(
            <div className='form'>
                <form ref='form'>
                    <ul className='item'>
                        <li className='hide'>
                            <span className='label'>Id: </span><input type='text' className='input' defaultValue={ topicCategory.id } name='id' />
                        </li>
                        <li>
                            <span className='label'>名称:</span><input type='text'  className='input' defaultValue={ topicCategory.name } name='name' data-rule="require:true, max:30" />
                        </li>
                        <li>
                            <span className='label'>排序:</span><input type='text'  className='input' defaultValue={ topicCategory.position } name='position' data-rule="type:number" />
                        </li>
                        <li>
                            <span className='label'>状态:</span><DropDownList ref='status' { ...statusParams } rule="require:true" />
                        </li>
                    </ul>
                </form>
                <ul className='toolbar'>
                    <span onClick={ this.save } className='link-btn save'><i className='fa fa-plus'> </i><span>保存</span></span>
                    <span onClick={ this.cancel } className='link-btn'><i className='fa fa-remove'> </i><span>取消</span></span>
                </ul>
            </div>
        )
    }
}
export default TopicCategory;
