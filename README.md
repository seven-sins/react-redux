####
        该项目不能独立运行
        因调用接口来自于同仓库下的springboot
####UI预览
    封装的UI组件路径 /src/common/commponents， 包含Grid、DatePicker、DropDownList等
Grid 1. <br>
![image](https://github.com/seven-sins/react-redux/blob/master/tmp/grid.png)
<br>
Grid 2. <br>
![image](https://github.com/seven-sins/react-redux/blob/master/tmp/grid1.png)
<br>
DatePicker. <br>
![image](https://github.com/seven-sins/react-redux/blob/master/tmp/date.png)
<br>
Validator. <br>
![image](https://github.com/seven-sins/react-redux/blob/master/tmp/validate.png)
<br>

###待处理问题
    1. Grid组件编辑数据成功， Grid数据重置， Pager组件index显示错误
        暂时通用ref主动调用grid中的方法， 待优化
    2. 分页组件显示每页记录下拉列表事件未处理
    
###公共组件

####1. DropDownList
		eg:
			let param = { value: user.roleId, id: 'id', text: 'name', url: '/role', data: [], empty: false, manual: true, rule: "require: true", init: [{id: 0, text: '无'}]  };
			value: 默认值
			id: id属性名称
			text: text属性名称
			url: 获取列表的url, get方式
			data: 渲染列表的数组(传了data属性则会忽略url属性)
			empty: false 不显示空, 默认显示
			manual: true  鼠标移出时不隐藏，需要手动点击选项时才隐藏列表框
			rule: "require: true" 验证规则
			init: init中的数据将与url获取的数据使用concat合并
			
			<DropDownList ref='roleId' { ...param } />

		1. 取值
			value: this.refs.roleId.value()
			text:  this.refs.roleId.text()

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
       
####3. Dialog       
			let dialogParams = { width: 600, height: 430, title: "新建", dialog: this.dialog };
			<Dialog { ...dialogParams }>
				<div>content</div>
			</Dialog>

####4. Validator
			eg:
				<input type="text" data-rule="require:true, max:20, min:5, type:number" />
				require: 必填
				max: 最大输入长度
				min: 最小输入长度
				type: number 输入类型必须是number
            
####5. DatePicker
			eg:
				let params = { value: new Date() }
				<DatePicker { ...params } />