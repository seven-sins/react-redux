npm install<br />
npm start<br />
##公共组件
1.DropDownList\<h2\><br />
    1. 取值\<h3\><br />
    value: this.refs.roleId.state.id<br />
    text:  this.refs.roleId.state.text<br />
    2. 参数\<h3\><br />
    value: 默认值<br />
    id: id属性名称<br />
    text: text属性名称<br />
    url: 获取列表的url, get方式<br />
    data: 渲染列表的数组(传了data属性则会忽略url属性)<br />
    <DropDownList ref='roleId' value={ user.roleId } id='id' text='name' url='/role' /><br />
