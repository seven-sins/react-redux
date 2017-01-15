        npm install
        npm start
###公共组件

####1. DropDownList
    eg:
        let param = { value: user.roleId, id: 'id', text: 'name', url: '/role' };
        <DropDownList ref='roleId' { ...param } />

    1. 取值
        value: this.refs.roleId.state.id
        text:  this.refs.roleId.state.text
    2. 参数
        value: 默认值
        id: id属性名称
        text: text属性名称
        url: 获取列表的url, get方式
        data: 渲染列表的数组(传了data属性则会忽略url属性)

