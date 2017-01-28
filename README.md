        npm install
        npm start
###待处理问题
    1. Grid组件编辑数据成功， Grid数据重置， Pager组件index显示错误
    
###公共组件

####1. DropDownList
    eg:
        let param = { value: user.roleId, id: 'id', text: 'name', url: '/role', data: [], empty: false, manual: true };
        value: 默认值
        id: id属性名称
        text: text属性名称
        url: 获取列表的url, get方式
        data: 渲染列表的数组(传了data属性则会忽略url属性)
        empty: false 不显示空, 默认显示
        manual: true  鼠标移出时不隐藏，需要手动点击选项时才隐藏列表框
        <DropDownList ref='roleId' { ...param } />

    1. 取值
        value: this.refs.roleId.state.id
        text:  this.refs.roleId.state.text

####2. Grid
    eg:
       let grid = {
            toolbar: [
                { name: 'load', option: { class: 'fa fa-plus', action: this.props.load } },
                { name: 'create', option: { class: 'fa fa-plus', action: this.create } },
                { name: 'update', option: { class: 'fa fa-edit', action: this.update } },
                { name: 'remove', option: { class: 'fa fa-remove', action: this.remove } }
            ],
            columns: [
                { field: "id", title: 'id', width: 200, class: 'hide' },
                { field: "roleName", title: '角色', width: 150 },
                { field: "userName", title: '用户名', width: 150 },
                { field: "nickName", title: '昵称', width: 200 },
                { field: "phoneNumber", title: '电话', width: 200 },
                { field: "email", title: '邮箱', width: 200 },
                { field: "status", title: '状态', width: 200, template: (row) => {
                    if(row.status === 0){
                        return <span style={{ color: 'green' }}>启用</span>;
                    }else{
                        return <span style={{ color:'#f00' }}>禁用</span>;
                    }
                } }
            ],
            data: data,
            total: total
       };
       <Grid { ...grid } />
####2. Dialog       
       
        let dialogParams = { width: 600, height: 430, title: "新建", dialog: this.dialog };
        <Dialog { ...dialogParams }>
            <div>content</div>
        </Dialog>
