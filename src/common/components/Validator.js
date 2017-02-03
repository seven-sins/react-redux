/**
 * Created by seven sins on 1/29/2017.
 */
import './Validator.less';

/**
 *  表单规则定义使用data-rule
 *      eg: data-rule= "require: true"
 *  组件规则定义使用rule(因js属性不识别-)
 *      eg: rule="require: true"
 */
class Validator{
    container = document;
    elements = []; // 声明存储包含子节点、孙节点的变量
    regex = {
        email: /^\w+(\.|\-){0,1}\w+@\w+(\.\w+){1,2}$/,
        number: /^\d+(\.\d+)*$/
    };
    constructor = () =>{

    };
    /**
     * @param el 容器
     */
    getChildren = (el) => {
        let children = el.children;
        if(children.length > 0){
            for(let i=0;i<children.length;i++){
                if(children[i].getAttribute('data-rule')){
                    this.elements.push(children[i]);
                }else{
                    this.getChildren(children[i]);
                }
            }
        }
    };
    /**
     * @param rule 待解析的字符串
     */
    getRule = (rule) => {
        let json = {};
        let arr = rule.split(',');
        if(arr.length == 0){
            return json;
        }
        for(let i=0; i<arr.length; i++){
            let map = arr[i].split(':');
            if(map[0] && map[1]){
                let key = map[0].replace(/\s+/g, '');
                let value = map[1].replace(/\s+/g, '');
                json[key] = value;
            }
        }
        return json;
    };
    insertAfter = (newEl, targetEl) => {
        let parent = targetEl.parentNode;
        if( parent.lastChild == targetEl ){ //
            parent.appendChild(newEl);
        }else{
            parent.insertBefore( newEl, targetEl.nextSibling );
        }
    };
    bind = (obj, events, fn) => {
        if (obj.addEventListener) {
            obj.addEventListener(events, fn, false);
        } else {
            obj.addachEvent('on' + events, fn);
        }
    };
    init = (el) => {
        this.container = el;
        this.getChildren(el); // 结果存储在this.elements
        if(this.elements.length == 0){
            return;
        }
        for (let i = 0; i < this.elements.length; i++) {
            let dom = this.elements[i];
            let rule = dom.getAttribute('data-rule');
            if(rule){
                let json = this.getRule(rule);
                let messageObj = document.createElement('span');
                messageObj.className = 'error-msg';
                this.insertAfter(messageObj, dom);
                dom.borderColor = dom.style.borderColor;
                for(let key in json){
                    switch(key){
                        case 'require':
                            let requireObj = document.createElement('i');
                            requireObj.innerHTML = '*';
                            requireObj.className = 'require';
                            this.insertAfter(requireObj, dom);
                            if(dom.tagName.toUpperCase() == 'INPUT'){
                                this.bind(dom, "blur", function(){
                                    if(!this.value || (this.value.replace(/\s+/, '').length == 0)){
                                        // this.style.borderColor = '#d00';
                                        messageObj.innerHTML = '选项不能为空';
                                    }else{
                                        // this.style.borderColor = this.borderColor;
                                        messageObj.innerHTML = '';
                                    }
                                });
                            }
                            break;
                        case 'max':
                            let maxValue = json[key];
                            if(!isNaN(maxValue)){
                                maxValue = parseInt(maxValue);
                                if(dom.tagName.toUpperCase() == 'INPUT'){
                                    this.bind(dom, "blur", function(){
                                        if(this.value){
                                            if(this.value.replace(/\s+/, '').length > maxValue){
                                                if(!messageObj.innerHTML){
                                                    messageObj.innerHTML = '输入长度不能大于 ' + maxValue;
                                                }
                                            }else{
                                                if(messageObj.innerHTML.match("输入长度不能大于")){
                                                    messageObj.innerHTML = '';
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                            break;
                        case 'min':
                            let minValue = json[key];
                            if(!isNaN(minValue)){
                                minValue = parseInt(minValue);
                                if(dom.tagName.toUpperCase() == 'INPUT'){
                                    this.bind(dom, "blur", function(){
                                        if(this.value && (this.value.replace(/\s+/, '').length < minValue)){
                                            if(!messageObj.innerHTML){
                                                messageObj.innerHTML = '输入长度不能小于 ' + minValue;
                                            }
                                        }else{
                                            if(messageObj.innerHTML.match("输入长度不能小于")){
                                                messageObj.innerHTML = '';
                                            }
                                        }
                                    });
                                }
                            }
                            break;
                        case 'type':
                            let typeValue = json[key];
                            let regex;
                            switch(typeValue){
                                case 'email':
                                    regex = this.regex.email;
                                    break;
                                case 'number':
                                    regex = this.regex.number;
                                    break;
                                default:
                                    break;
                            }
                            if(dom.tagName.toUpperCase() == 'INPUT'){
                                this.bind(dom, "blur", function(){
                                    if(this.value){ // 输入不为空
                                        if(!(regex.test(this.value))){
                                            if(!messageObj.innerHTML){
                                                messageObj.innerHTML = '输入格式错误 ' + typeValue;
                                            }
                                        }else{
                                            if(messageObj.innerHTML.match("输入格式错误")){
                                                messageObj.innerHTML = '';
                                            }
                                        }
                                    }else{ // 输入为空
                                        if(!messageObj.innerHTML.match("选项不能为空")){
                                            messageObj.innerHTML = '';
                                        }
                                    }
                                });
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    };
    validate = (el) => {
        this.getChildren(el); // 结果存储在this.elements
        if(this.elements.length == 0){
            return true;
        }
        let valid = true;
        for (let i = 0; i < this.elements.length; i++){
            let dom = this.elements[i];
            let rule = dom.getAttribute('data-rule');
            if(rule){
                let json = this.getRule(rule);
                for(let key in json){
                    switch(key){
                        case 'require':
                            if(dom.tagName.toUpperCase() == 'INPUT'){
                                dom.focus();
                                dom.blur();
                                if(!dom.value || dom.value.replace(/\s+/,'').length == 0){
                                    valid = false;
                                }
                            }else if(dom.tagName.toUpperCase() == 'DIV'){
                                /**
                                 * DropDownList
                                 * @type {NodeList}
                                 */
                                let showText = dom.getElementsByClassName('show-text');
                                if(showText.length > 0){
                                    let text = showText[0].innerText.trim();
                                    if(text === '请选择'){
                                        let elements = dom.parentNode.getElementsByClassName('error-msg');
                                        if(elements.length > 0){
                                            valid = false;
                                            elements[0].innerHTML = '选项不能为空';
                                        }
                                    }
                                    break;
                                }
                                /**
                                 * DatePicker
                                 * @type {NodeList}
                                 */
                                let showInput = dom.getElementsByClassName('show-input');
                                if(showInput.length > 0){
                                    if(!showInput[0].value){
                                        let elements = dom.parentNode.getElementsByClassName('error-msg');
                                        if(elements.length > 0){
                                            valid = false;
                                            elements[0].innerHTML = '选项不能为空';
                                        }
                                    }
                                    break;
                                }
                            }
                            break;
                        case 'max':
                            let maxValue = json[key];
                            if(!isNaN(maxValue)){
                                maxValue = parseInt(maxValue);
                                if(dom.tagName.toUpperCase() == 'INPUT'){
                                    dom.focus();
                                    dom.blur();
                                    if(dom.value.replace(/\s+/, '').length > maxValue){
                                        valid = false;
                                    }
                                }
                            }
                            break;
                        case 'min':
                            let minValue = json[key];
                            if(!isNaN(minValue)){
                                minValue = parseInt(minValue);
                                if(dom.tagName.toUpperCase() == 'INPUT'){
                                    dom.focus();
                                    dom.blur();
                                    if(dom.value && (dom.value.replace(/\s+/, '').length < minValue)){
                                        valid = false;
                                    }
                                }
                            }
                            break;
                        case 'type':
                            let typeValue = json[key];
                            let regex;
                            switch(typeValue){
                                case 'email':
                                    regex = this.regex.email;
                                    break;
                                case 'number':
                                    regex = this.regex.number;
                                    break;
                                default:
                                    break;
                            }
                            if(dom.tagName.toUpperCase() == 'INPUT'){
                                dom.focus();
                                dom.blur();
                                if(dom.value){
                                    if(!(regex.test(dom.value))){
                                        valid = false;
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        return valid;
    }
}
export const validate = {
    init: (el) => {
        let v = new Validator();
        v.init(el);
    },
    validate: (el) => {
        let v = new Validator();
        return v.validate(el);
    }
};
